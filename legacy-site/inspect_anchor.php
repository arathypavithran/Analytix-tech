<?php
$html = file_get_contents('anchor_ai_dump.html');
echo "HTML Length: " . strlen($html) . "\n";
preg_match_all('/<script[^>]*src=["\']([^"\']+)["\']/i', $html, $m);
foreach ($m[1] as $s) {
    echo "Script: $s\n";
}

// Find title and text snippets
preg_match('/<title>(.*?)<\/title>/is', $html, $t);
echo "Title: " . ($t[1] ?? '') . "\n";
