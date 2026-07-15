$xml = [xml](Get-Content -LiteralPath 'c:\Users\pu214\Documents\雾锁香江2\docx_temp\word\document.xml' -Encoding UTF8)
$xml.document.body.ChildNodes | Where-Object { $_.Name -eq 'p' } | ForEach-Object { $_.InnerText }
