<?php
$json = json_decode(file_get_contents(__DIR__ . '/extracted_full_site.json'), true);

echo "=== CONTACT DETAILS ===\n";
foreach ($json['contact']['blocks'] as $b) {
    if (preg_match('/@|\+|phone|email|address|street|location|saudi|khobar|riyadh|dammam/i', $b['text'])) {
        echo "[{$b['tag']}] {$b['text']}\n";
    }
}

echo "\n=== HOMEPAGE HERO & KEY SECTIONS ===\n";
for ($i = 0; $i < min(40, count($json['index']['blocks'])); $i++) {
    $b = $json['index']['blocks'][$i];
    echo "[{$b['tag']}] {$b['text']}\n";
}

echo "\n=== ABOUT PAGE HERO & KEY SECTIONS ===\n";
for ($i = 0; $i < min(40, count($json['about']['blocks'])); $i++) {
    $b = $json['about']['blocks'][$i];
    echo "[{$b['tag']}] {$b['text']}\n";
}

echo "\n=== SERVICES PAGES ===\n";
echo "Design:\n";
foreach (array_slice($json['design']['blocks'], 0, 15) as $b) echo "  [{$b['tag']}] {$b['text']}\n";
echo "Development:\n";
foreach (array_slice($json['dev']['blocks'], 0, 15) as $b) echo "  [{$b['tag']}] {$b['text']}\n";
echo "Marketing:\n";
foreach (array_slice($json['marketing']['blocks'], 0, 15) as $b) echo "  [{$b['tag']}] {$b['text']}\n";

echo "\n=== SOLUTIONS PAGES ===\n";
echo "Odoo ERP:\n";
foreach (array_slice($json['odoo']['blocks'], 0, 15) as $b) echo "  [{$b['tag']}] {$b['text']}\n";
echo "AI Process Automation:\n";
foreach (array_slice($json['ai']['blocks'], 0, 15) as $b) echo "  [{$b['tag']}] {$b['text']}\n";
echo "Aramco Cybersecurity:\n";
foreach (array_slice($json['cyber']['blocks'], 0, 15) as $b) echo "  [{$b['tag']}] {$b['text']}\n";

