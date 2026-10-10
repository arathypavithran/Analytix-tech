<?php
$cssFiles = glob(__DIR__ . '/page_wp-content*.html');

$colors = [];
foreach ($cssFiles as $f) {
    $content = file_get_contents($f);
    preg_match_all('/#[0-9a-fA-F]{3,8}|rgba?\([^\)]+\)/', $content, $matches);
    foreach ($matches[0] as $c) {
        $colors[$c] = ($colors[$c] ?? 0) + 1;
    }
}

arsort($colors);
echo "Most frequent colors in site CSS:\n";
$i = 0;
foreach ($colors as $color => $count) {
    echo "$color : $count\n";
    $i++;
    if ($i >= 30) break;
}
