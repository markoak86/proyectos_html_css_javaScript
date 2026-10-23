<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:output method="html" encoding="UTF-8" indent="yes"/>

<xsl:template match="/">
    <html>
        <head>
            <title>Mis Videojuegos</title>
            <style>
                table { width: 100%; border-collapse: collapse; }
                th, td {border: 1px solid black; padding: 10px; text-aling: left; }
                th {backgroud-color: #f2f2f2; }
            </style>
        </head>

        <body>
            <h2>Catalogo de Videojuegos</h2>
            <table>
                <tr>
                    <th>titulo</th>
                    <th>genero</th>
                    <th>anio</th>
                    <th>desarrolladora</th>
                    <th>plataforma</th>
                </tr>
                <xsl:for-each select="juegos/juego">
                    <tr>
                        <td><xsl:value-of select="titulo"/></td>
                        <td><xsl:value-of select="genero"/></td>
                        <td><xsl:value-of select="anio"/></td>
                        <td><xsl:value-of select="desarrolladora"/></td>
                        <td><xsl:value-of select="@plataforma"/></td>
                    </tr>
                </xsl:for-each>
            </table>
        </body>
    </html>
</xsl:template>

</xsl:stylesheet>









