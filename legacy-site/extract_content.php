<?php
$files = glob(__DIR__ . '/page_*.html');

function extractInfo($file) {
    $html = file_get_contents($file);
    $filename = basename($file);
    
    // Extract title
    preg_match('/<title>(.*?)<\/title>/is', $html, $mTitle);
    $title = $mTitle[1] ?? '';
    
    // Extract meta description
    preg_match('/<meta name="description" content="(.*?)"/is', $html, $mDesc);
    $desc = $mDesc[1] ?? '';

    // Extract H1s, H2s, H3s
    preg_match_all('/<h1[^>]*>(.*?)<\/h1>/is', $html, $mH1);
    preg_match_all('/<h2[^>]*>(.*?)<\/h2>/is', $html, $mH2);
    preg_match_all('/<h3[^>]*>(.*?)<\/h3>/is', $html, $mH3);

    // Strip tags helper for text snippet
    $cleanH1 = array_map('trim', array_map('strip_tags', $mH1[1] ?? []));
    $cleanH2 = array_map('trim', array_map('strip_tags', $mH2[1] ?? []));
    $cleanH3 = array_map('trim', array_map('strip_tags', $mH3[1] ?? []));

    return [
        'file' => $filename,
        'title' => trim(html_entity_decode($title)),
        'h1' => $cleanH1,
        'h2' => array_slice($cleanH2, 0, 15),
        'h3' => array_slice($cleanH3, 0, 15),
    ];
}

$summary = [];
foreach ($files as $f) {
    $info = extractInfo($f);
    if (!empty($info['title']) || !empty($info['h1'])) {
        $summary[] = $info;
    }
}

file_put_contents(__DIR__ . '/extracted_summary.json', json_encode($summary, JSON_PRETTY_PRINT));
echo "Extracted summary for " . count($summary) . " files.\n";

// Let's also extract logos and images from homepage
$hp = file_get_contents(__DIR__ . '/page_index.html');
preg_match_all('/<img[^>]+src=["\']([^"\']+)["\'][^>]*>/i', $hp, $imgs);
echo "Homepage images count: " . count($imgs[1]) . "\n";
foreach (array_unique($imgs[1]) as $img) {
    echo "IMG: $img\n";
}
