<!DOCTYPE html>
<html lang="en-US">

<head>
    <?php
    include "../../../assets_header.php"
    ?>
    <style>
        .fieldRow {
            width: 49% !important;
            display: inline-block;
        }
        label{
            margin-left: -250px !important;
        }
        input[type='text'], select, textarea {
            background-color: #fff;
            line-height: 1.5em;
            color: #000;
            border: 1px solid #aeb0b6;
            padding: 0.2em 0.3em;
            min-height: 1.9em;
            border-radius: 4px;
            font-family: adobe-clean,Helvetica,Arial,sans-serif;
            letter-spacing: 0;
            width: 330px;
        }
        .mktoButton{
            background-color: #CE282C !important;
            border-color: #CE282C !important;
            padding: 15px 50px;
        }
    </style>
</head>
<body class="structuredpage StructuredPage Action-index lead-data-unknown locale-us" dir="ltr">

<?php
include "../../../header.php"
?>

        <article class="header-wrapper" style="margin-top: 64px;">
            <section class="image-cover background gradient marketo"
                
                    
                     style="width80%; margin: 0 auto; background-image: url(../../../assets/pages/StructuredPage/Support-1366x250.jpg);"
                    
                >
                <div style="height: 11.6rem;" id="rtp-10036-header" class="rtp-container container hero Small  tac">
                    
                    
                        <h1 class="adobe-header ">Contact us</h1>
                    
                    
                    
                    
                </div>
            </section>
        </article>
    

    
<style>
    .form_container{
        background: #fff;
        padding: 25px 40px 10px 40px;
    }
    .form_container .text{
        text-align: center;
        font-size: 35px;
        font-weight: 600;
        background: -webkit-linear-gradient(right, #56d8e4, #9f01ea, #56d8e4, #9f01ea);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    .form_container form{
        padding: 30px 0 0 0;
    }
    .form_container form .form-row{
        display: flex;
        margin: 32px 0;
    }
    form .form-row .input-data{
        width: 100%;
        height: 100%;
        margin: 0 20px;
        position: relative;
    }
    form .form-row .textarea{
        height: 100%;
    }
    .input-data input,
    .textarea textarea{
        display: block;
        width: 100%;
        height: 100%;
        font-size: 17px;
    }
    .input-data select{
        display: block;
        width: 100%;
        height: 100%;
        font-size: 17px;
        background-image: none !important;
    }
    .input-data input:focus ~ label, .textarea textarea:focus ~ label,
    .input-data input:valid ~ label, .textarea textarea:valid ~ label{
        transform: translateY(-20px);
        font-size: 14px;
        color: #3498db;
    }
    .textarea textarea{
        resize: none;
        padding-top: 10px;
    }
    .input-data label{
        pointer-events: none;
        bottom: 10px;
        font-size: 16px;
        transition: all 0.3s ease;
        display: table-row;
    }
    .textarea label{
        width: 100%;
        bottom: 40px;
        background: #fff;
    }
    .input-data .underline{
        position: absolute;
        bottom: 0;
        height: 2px;
        width: 100%;
    }
    .input-data .underline:before{
        position: absolute;
        content: "";
        height: 2px;
        width: 100%;
        background: #3498db;
        transform: scaleX(0);
        transform-origin: center;
        transition: transform 0.3s ease;
    }
    .input-data input:focus ~ .underline:before,
    .input-data input:valid ~ .underline:before,
    .textarea textarea:focus ~ .underline:before,
    .textarea textarea:valid ~ .underline:before{
        transform: scale(1);
    }
    .submit-btn .input-data{
        overflow: hidden;
        height: 45px!important;
        width: 25%!important;
    }
    .submit-btn .input-data .inner{
        height: 100%;
        width: 300%;
        position: absolute;
        left: -100%;
        background: #CE282C !important;
        transition: all 0.4s;
    }
    .submit-btn .input-data:hover .inner{
        left: 0;
    }
    .submit-btn .input-data input{
        background: none;
        border: none;
        color: #fff;
        font-size: 17px;
        font-weight: 500;
        text-transform: uppercase;
        letter-spacing: 1px;
        cursor: pointer;
        position: relative;
        z-index: 2;
    }
    @media (max-width: 700px) {
        .form_container .text{
            font-size: 30px;
        }
        .form_container form{
            padding: 10px 0 0 0;
        }
        .form_container form .form-row{
            display: block;
        }
        form .form-row .input-data{
            margin: 35px 0!important;
        }
        .submit-btn .input-data{
            width: 40%!important;
        }
    }
</style>
<main id="layout-wrapper">
    <section class="background white padding tb-30-30 tac text-and-columns">
    <div class="form-wrapper">

        <div class="form_container">
            <form action="#">
                <div class="form-row">
                    <div class="input-data">
                        <label for="">Enquiry Type</label>
                        <select id="enquiry_type" required>
                            <option selected="selected" value="" label=" " aria-label="Blank"> </option>
                            <option value="225000000">Join Manawanui</option>
                            <option value="225000002">Existing Customer – Query</option>
                            <option value="343800000">NZQA Training</option>
                            <option value="343800001">Purchasing Query</option>
                            <option value="343800002">Employer Protection Package</option>
                            <option value="343800003">e-Mploy Recruitment / Staff Recruitment</option>
                            <option value="343800004">Payroll Service</option>
                            <option value="225000001">Service Feedback</option>
                            <option value="225000004">Other</option>
                        </select>
                    </div>
                    <div class="input-data hear_about" style="display: none">
                        <label for="">How did you hear about us?</label>
                        <select id="hearAbout">
                            <option selected="selected" value="" label=" " aria-label="Blank"> </option>
                            <option value="343800006">Manawanui Customer</option>
                            <option value="343800013">Other</option>
                            <option value="343800003">Friends or Family/Whānau</option>
                            <option value="343800008">NASC Staff Member/Coordinator</option>
                            <option value="343800001">Disability Support Group</option>
                            <option value="343800014">Special Education Support Coordinator</option>
                            <option value="343800000">Community Advice Group/Centre</option>
                            <option value="343800007">Manawanui Staff Member (e.g. Coach)</option>
                            <option value="343800005">Internet Search</option>
                            <option value="343800011">Social Worker</option>
                            <option value="343800012">Specialist</option>
                            <option value="343800004">GP/Doctor</option>
                            <option value="343800009">Nurse/Plunkett Nurse</option>
                            <option value="343800010">Social Media (Twitter/Facebook/etc)</option>
                            <option value="343800002">Expo/Conference</option>
                            <option value="343800016">Advertising</option>
                        </select>
                    </div>
                </div>
                <div class="form-row">
                    <div class="input-data">
                        <label for="">First Name</label>
                        <input type="text" required>
                    </div>
                    <div class="input-data">
                        <label for="">Last Name</label>
                        <input type="text" required>
                    </div>
                </div>
                <div class="form-row">
                    <div class="input-data">
                        <label for="">Email Address</label>
                        <input type="text" required>
                    </div>
                    <div class="input-data">
                        <label for="">Mobile</label>
                        <input type="text" required>
                    </div>
                </div>
                <div class="form-row">
                    <div class="input-data textarea">
                        <label for="">Write your message</label>
                        <textarea rows="4" cols="80" required></textarea>
                    </div>
                </div>
                <div class="form-row submit-btn">
                    <div class="input-data" style="margin: 0 auto !important;">
                        <div class="inner"></div>
                        <input type="submit" id="sumitBtn" value="submit">
                    </div>
                </div>
            </form>
        </div>

    </div>
    </section>








	<div class='js-scroll-to-section' id='sectionID-401' data-scroll-id='sectionID-401' data-title='Remove barriers to your success with skilled technical assistance and personalized guidance'>

<section class="background white padding tb-30-30 tac text-and-columns">
	<div class="container medium column">
		
			
			
			
			
			<div class="rtp-container nothing-div" id="rtp-401-h2">
			<h2 >Contact us</h2>
			</div>
			
			
			
		
		
    


	</div>
</section>
    </div>



</main>

<?php
include "../../../footer.php"
?>

<?php
include "../../../assets_footer.php"
?>
<script type="text/javascript">
    $("#enquiry_type").on("change",function (){
        let selected = $(this).val();
        if(selected == "225000000"){
            $("#hearAbout").attr("required","true");
            $(".hear_about").show();
        }else{
            $("#hearAbout").removeAttr("required");
            $(".hear_about").hide();
        }
    });
    $("form").submit(function(e) {
        e.preventDefault();//prevent the form from actually submitting
        window.location = '<?=baseUrl()?>';
    });
</script>
</html>
