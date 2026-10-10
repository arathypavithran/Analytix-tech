<?php
$files = glob(__DIR__ . '/page_*.html');

$data = [];

foreach ($files as $file) {
    $filename = basename($file);
    $html = file_get_contents($file);
    
    // Simple DOM extraction
    $doc = new DOMDocument();
    @$doc->loadHTML('<?xml encoding="utf-8" ?>' . $html, LIBXML_NOERROR | LIBXML_NOWARNING);
    $xpath = new DOMXPath($doc);
    
    // Title
    $titleNode = $xpath->query('//title')->item(0);
    $title = $titleNode ? trim($titleNode->nodeValue) : '';
    
    // Extract main content paragraphs / headers
    $headings = [];
    $nodes = $xpath->query('//h1 | //h2 | //h3 | //h4 | //p | //li');
    $texts = [];
    foreach ($nodes as $node) {
        $text = trim(preg_replace('/\s+/', ' ', $node->nodeValue));
        if (strlen($text) > 3) {
            $texts[] = [
                'tag' => $node->nodeName,
                'text' => $text
            ];
        }
    }
    
    $data[$filename] = [
        'title' => $title,
        'elements' => array_slice($texts, 0, 100) // sample top elements
    ];
}

file_put_contents(__DIR__ . '/full_content.json', json_encode($data, JSON_PRETTY_PRINT));
echo "Full content parsed for " . count($data) . " files.\n";
