<?php
function baseUrl(){
    if(isset($_SERVER['HTTPS'])){
        $protocol = ($_SERVER['HTTPS'] && $_SERVER['HTTPS'] != "off") ? "https" : "http";
    }
    else{
        $protocol = 'http';
    }
    return $protocol . "://" . $_SERVER['HTTP_HOST'];
}
?>

    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=2.0">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta name="theme-color" content="#4C50CC">

    <link rel="shortcut icon" href="<?=baseUrl()?>/themes/the-interwebs/dist/images/favicon43a0.ico?v3"/>

    <link rel="alternate" hreflang="es-ES" href="https://es.marketo.com/"/>

    <link rel="stylesheet" type="text/css" href="<?=baseUrl()?>/themes/the-interwebs/dist/css/layers/Marquee56bd.css?m=1655934665"/>
    <link rel="stylesheet" type="text/css"
          href="<?=baseUrl()?>/themes/the-interwebs/dist/css/layers/ValueAddOns56bd.css?m=1655934665"/>
    <link rel="stylesheet" type="text/css" href="<?=baseUrl()?>/themes/the-interwebs/dist/css/elements/Dividerddc3.css?m=1655934664"/>
    <link rel="stylesheet" type="text/css"
          href="<?=baseUrl()?>/themes/the-interwebs/dist/css/layers/BannerCTALayerddc3.css?m=1655934664"/>
    <link rel="stylesheet" type="text/css" href="<?=baseUrl()?>/themes/the-interwebs/dist/css/layers/Collection56bd.css?m=1655934665"/>
    <link rel="stylesheet" type="text/css"
          href="<?=baseUrl()?>/themes/the-interwebs/dist/css/layers/CustomerLogosLayer56bd.css?m=1655934665"/>
    <link rel="stylesheet" type="text/css"
          href="<?=baseUrl()?>/themes/the-interwebs/dist/css/layers/StaircaseLayer56bd.css?m=1655934665"/>
    <link rel="stylesheet" type="text/css"
          href="<?=baseUrl()?>/themes/the-interwebs/dist/css/layers/FearlessForumImageCardLayer56bd.css?m=1655934665"/>
    <link rel="stylesheet" type="text/css" href="<?=baseUrl()?>/themes/the-interwebs/dist/css/typographyddc3.css?m=1655934664"/>
    <link rel="stylesheet" type="text/css" href="<?=baseUrl()?>/themes/the-interwebs/dist/css/base_LoadGNAV18ee.css?m=1655934663"/>
    <link rel="stylesheet" type="text/css" href="<?=baseUrl()?>/themes/the-interwebs/dist/css/elements/Headerddc3.css?m=1655934664"/>
    <link rel="stylesheet" type="text/css" href="<?=baseUrl()?>/themes/the-interwebs/dist/css/nav/FooterCTA56bd.css?m=1655934665"/>
    <link rel="stylesheet" type="text/css" href="<?=baseUrl()?>/themes/the-interwebs/dist/css/nav/navbar.css"/>
<style>
    .cta.light:active, .cta.light:hover {
        background-color: #FF0000;
        color: #ffffff;
    }
    .feds-navLink-text {
        font-size: 16px !important;
    }
    .customer-logos-wrapper .logo-container .customer-logo img {
        width: 180px !important;
    }
</style>
