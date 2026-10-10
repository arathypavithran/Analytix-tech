<?php
$json = json_decode(file_get_contents(__DIR__ . '/extracted_full_site.json'), true);

$allImgs = [];
$files = glob(__DIR__ . '/page_*.html');

foreach ($files as $f) {
    $content = file_get_contents($f);
    preg_match_all('/https?:\/\/analytixbss\.com\/technew\/wp-content\/uploads\/[^\s"\'\)]+\.(png|jpg|jpeg|svg|webp|gif)/i', $content, $m);
    foreach ($m[0] as $url) {
        $allImgs[$url] = true;
    }
}

echo "Found " . count($allImgs) . " unique images across all pages.\n";

if (!is_dir(__DIR__ . '/assets')) {
    mkdir(__DIR__ . '/assets', 0777, true);
}

$ch = curl_init();
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
curl_setopt($ch, CURLOPT_USERAGENT, 'Mozilla/5.0');
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);

$downloaded = 0;
foreach (array_keys($allImgs) as $url) {
    $filename = basename(parse_url($url, PHP_URL_PATH));
    $dest = __DIR__ . '/assets/' . $filename;
    if (file_exists($dest) && filesize($dest) > 100) continue;
    
    curl_setopt($ch, CURLOPT_URL, $url);
    $data = curl_exec($ch);
    if ($data && strlen($data) > 100) {
        file_put_contents($dest, $data);
        $downloaded++;
    }
}
curl_close($ch);

echo "Downloaded $downloaded images to assets/\n";
