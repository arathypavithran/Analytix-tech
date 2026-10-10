<?php
$baseUrl = 'https://analytixbss.com/technew/';

function fetchUrl($url) {
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
    curl_setopt($ch, CURLOPT_USERAGENT, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    $html = curl_exec($ch);
    curl_close($ch);
    return $html;
}

$homepageHtml = fetchUrl($baseUrl);
file_put_contents(__DIR__ . '/page_index.html', $homepageHtml);
echo "Homepage size: " . strlen($homepageHtml) . " bytes\n";

// Find links
preg_match_all('/href=["\']([^"\']+)["\']/', $homepageHtml, $matches);
$urls = [$baseUrl];

foreach ($matches[1] as $href) {
    if (strpos($href, 'mailto:') === 0 || strpos($href, 'tel:') === 0 || strpos($href, '#') === 0) continue;
    $full = $href;
    if (!preg_match('/^https?:\/\//', $href)) {
        $full = rtrim($baseUrl, '/') . '/' . ltrim($href, '/');
    }
    if (strpos($full, 'analytixbss.com/technew') !== false) {
        $urls[] = strtok($full, '#');
    }
}

$urls = array_unique($urls);
echo "Found " . count($urls) . " pages:\n";

foreach ($urls as $url) {
    echo "Fetching: $url\n";
    $html = fetchUrl($url);
    $key = str_replace($baseUrl, '', $url);
    $key = trim($key, '/');
    if (empty($key)) $key = 'index';
    $key = preg_replace('/[^a-zA-Z0-9_\-]/', '_', $key);
    file_put_contents(__DIR__ . "/page_{$key}.html", $html);
}

echo "All pages saved!\n";
