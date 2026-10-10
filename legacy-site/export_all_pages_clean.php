<?php
$json = json_decode(file_get_contents(__DIR__ . '/extracted_full_site.json'), true);

foreach ($json as $pageKey => $data) {
    echo "=========================================\n";
    echo "PAGE KEY: $pageKey\n";
    echo "Title: " . $data['title'] . "\n";
    echo "-----------------------------------------\n";
    $count = 0;
    foreach ($data['blocks'] as $b) {
        // filter out nav noise
        $t = $b['text'];
        if (in_array($t, ['Home', 'About Us', 'Blog', 'Design', 'Development', 'Marketing', 'Odoo ERP Implementation', 'AI Process Automation', 'Aramco Cybersecurity Compliance', 'Services', 'Solutions', 'Industries'])) continue;
        if (strpos($t, 'Service Design') !== false || strpos($t, 'Solutions Odoo') !== false) continue;
        echo "[{$b['tag']}] $t\n";
        $count++;
        if ($count > 30) {
            echo "... (and " . (count($data['blocks']) - $count) . " more items)\n";
            break;
        }
    }
    echo "\n";
}
