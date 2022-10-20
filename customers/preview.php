<!DOCTYPE html>
<html lang="en-US">
<head>
    <?php
    include "../assets_header.php"
    ?>
    <link rel="stylesheet" type="text/css" href="<?=baseUrl()?>/assets/template-resources.css" />
    <link rel="stylesheet" type="text/css" href="<?=baseUrl()?>/assets/template-hero-slider.css" />
</head>
<body class="resourcetype ResourceType Action-index lead-data-unknown locale-us" dir="ltr">
<?php
include "../header.php"
?>
<link href="https://vjs.zencdn.net/7.20.3/video-js.css" rel="stylesheet" />
<main id="layout-wrapper">
    





    <div class='js-scroll-to-section' id='sectionID-713' data-scroll-id='sectionID-713' data-title='Hero Slider Element'>

<section id="homepage-hero" class="background gradient black slider  has-dots Large" data-color="">
    
    
        <section style="
        background-image: url('<?=baseUrl()?>/assets/SiteConfig/Get-Started-Blade2.png');"
                 class=" hero-slide"
                 data-desktop-background="<?=baseUrl()?>/assets/SiteConfig/Get-Started-Blade2.png"
            
        >
            <div class="slider-content-container">
                <div style="height: 23.25rem !important;" id="rtp-714" class="rtp-container container hero  Large  ">
                    <div class="mobile-image-container">
                        
                    </div>
                    
                        <h1 style="margin-bottom: 0px !important; margin-top:4rem">Preview</h1>
                    
                </div>
            </div>
        </section>
    
</section></div>

<section class="tac" style="width: 80%; margin: 0 auto;">
    <iframe src="https://docs.google.com/viewer?url=<?=baseUrl()?>/assets/Uploads/<?=$_GET["id"]?>.pdf&embedded=true"
            style="width:100%; height:1000px;"
            frameborder="0"></iframe>
</section>

</main>
<?php
include "../footer.php"
?>

<?php
include "../assets_footer.php"
?>
</html>
