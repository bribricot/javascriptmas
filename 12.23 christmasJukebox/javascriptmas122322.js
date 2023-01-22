<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>🎄 Christmas Jukebox</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&display=swap" rel="stylesheet">
  <link href="index.css" rel="stylesheet" type="text/css" />
</head>

<body>
  <div class="container">
    <h1>🎄 Christmas Jukebox</h1>
    <iframe id="player" type="text/html" width="480" height="240" src="https://www.youtube.com/embed/PoAjmmD89Vw?autoplay=1" frameborder="0"></iframe>
    
    <div class="songs">
        <button onclick="playSong('PoAjmmD89Vw')">White Christmas</button>
        <button onclick="playSong('1qYz7rfgLWE')">Rockin' Around The Christmas Tree</button>
        <button onclick="playSong('R_vmuL0gjU0')">Jingle Bell Rock</button>
        <button onclick="playSong('WaNwEkCeZrE')">It's Beginning to Look a Lot Like Christmas</button>
        <button onclick="playSong('AN_R4pR1hck')">It's the Most Wonderful Time of the Year</button>
    </div>
  </div>
  
  <script src="index.js"></script>
</body>

</html>
