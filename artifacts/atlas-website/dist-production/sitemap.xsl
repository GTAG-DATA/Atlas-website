<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9">

  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>

  <xsl:template match="/">
    <html lang="en">
      <head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>Sitemap — Atlas Corporate Services</title>
        <style>
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
            background: #f8fafc;
            color: #0f172a;
          }
          header {
            background: #0f172a;
            padding: 24px 40px;
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          header h1 {
            color: #fff;
            font-size: 18px;
            font-weight: 600;
            letter-spacing: -0.3px;
          }
          header span {
            color: #94a3b8;
            font-size: 13px;
          }
          .container {
            max-width: 900px;
            margin: 40px auto;
            padding: 0 24px;
          }
          .summary {
            background: #fff;
            border: 1px solid #e2e8f0;
            border-radius: 12px;
            padding: 20px 28px;
            margin-bottom: 32px;
            display: flex;
            gap: 40px;
          }
          .summary-item label {
            display: block;
            font-size: 11px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.8px;
            color: #64748b;
            margin-bottom: 4px;
          }
          .summary-item span {
            font-size: 22px;
            font-weight: 700;
            color: #0f172a;
          }
          .section {
            margin-bottom: 28px;
          }
          .section-title {
            font-size: 11px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 1px;
            color: #64748b;
            margin-bottom: 10px;
            padding: 0 4px;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            background: #fff;
            border: 1px solid #e2e8f0;
            border-radius: 12px;
            overflow: hidden;
          }
          thead tr {
            background: #f1f5f9;
          }
          th {
            text-align: left;
            padding: 10px 16px;
            font-size: 11px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.6px;
            color: #64748b;
            border-bottom: 1px solid #e2e8f0;
          }
          td {
            padding: 12px 16px;
            font-size: 13px;
            border-bottom: 1px solid #f1f5f9;
            vertical-align: middle;
          }
          tr:last-child td { border-bottom: none; }
          tr:hover td { background: #f8fafc; }
          a {
            color: #0369a1;
            text-decoration: none;
            font-weight: 500;
          }
          a:hover { text-decoration: underline; }
          .badge {
            display: inline-block;
            padding: 2px 8px;
            border-radius: 20px;
            font-size: 11px;
            font-weight: 600;
          }
          .priority-high { background: #dcfce7; color: #166534; }
          .priority-mid  { background: #fef9c3; color: #854d0e; }
          .priority-low  { background: #f1f5f9; color: #475569; }
          footer {
            text-align: center;
            padding: 32px;
            color: #94a3b8;
            font-size: 12px;
          }
          footer a { color: #0369a1; }
        </style>
      </head>
      <body>
        <header>
          <h1>Atlas Corporate Services — Sitemap</h1>
          <span>atlascorp.ae</span>
        </header>

        <div class="container">

          <!-- Summary -->
          <div class="summary">
            <div class="summary-item">
              <label>Total URLs</label>
              <span><xsl:value-of select="count(sitemap:urlset/sitemap:url)"/></span>
            </div>
            <div class="summary-item">
              <label>Last Updated</label>
              <span>Apr 2026</span>
            </div>
            <div class="summary-item">
              <label>Format</label>
              <span style="font-size:14px;padding-top:4px;">XML Sitemap 0.9</span>
            </div>
          </div>

          <!-- URL Table -->
          <div class="section">
            <div class="section-title">All Pages</div>
            <table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>URL</th>
                  <th>Change Frequency</th>
                  <th>Priority</th>
                </tr>
              </thead>
              <tbody>
                <xsl:for-each select="sitemap:urlset/sitemap:url">
                  <xsl:sort select="sitemap:priority" order="descending" data-type="number"/>
                  <tr>
                    <td style="color:#94a3b8;width:40px;">
                      <xsl:value-of select="position()"/>
                    </td>
                    <td>
                      <a href="{sitemap:loc}">
                        <xsl:value-of select="sitemap:loc"/>
                      </a>
                    </td>
                    <td style="color:#64748b;">
                      <xsl:value-of select="sitemap:changefreq"/>
                    </td>
                    <td>
                      <xsl:variable name="p" select="number(sitemap:priority)"/>
                      <xsl:choose>
                        <xsl:when test="$p >= 0.9">
                          <span class="badge priority-high"><xsl:value-of select="sitemap:priority"/></span>
                        </xsl:when>
                        <xsl:when test="$p >= 0.7">
                          <span class="badge priority-mid"><xsl:value-of select="sitemap:priority"/></span>
                        </xsl:when>
                        <xsl:otherwise>
                          <span class="badge priority-low"><xsl:value-of select="sitemap:priority"/></span>
                        </xsl:otherwise>
                      </xsl:choose>
                    </td>
                  </tr>
                </xsl:for-each>
              </tbody>
            </table>
          </div>

        </div>

        <footer>
          Generated for <a href="https://www.atlascorp.ae">atlascorp.ae</a> ·
          <a href="https://www.sitemaps.org/protocol.html">Sitemap Protocol 0.9</a>
        </footer>

      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
