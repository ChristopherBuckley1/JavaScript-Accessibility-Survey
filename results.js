document.getElementById('Summary').style.display='inline';
var totalScore=Number(sessionStorage.getItem('totalScore'));
var sec1Score=sessionStorage.getItem("sec1Summary");
document.getElementById("SummaryS1").value=sec1Score;
var sec2Score=sessionStorage.getItem("sec2Summary");
document.getElementById("SummaryS2").value=sec2Score;
var sec3Score=sessionStorage.getItem("sec3Summary");
document.getElementById("SummaryS3").value=sec3Score;
var sec4Score=sessionStorage.getItem("sec4Summary");
document.getElementById("SummaryS4").value=sec4Score;
var sec5Score=sessionStorage.getItem("sec5Summary");
document.getElementById("SummaryS5").value=sec5Score;
var sec6Score=sessionStorage.getItem("sec6Summary");
document.getElementById("SummaryS6").value=sec6Score;
var sec7Score=sessionStorage.getItem("sec7Summary");
document.getElementById("SummaryS7").value=sec7Score;
var sec8Score=sessionStorage.getItem("sec8Summary");
document.getElementById("SummaryS8").value=sec8Score;
var sec9Score=sessionStorage.getItem("sec9Summary");
document.getElementById("SummaryS9").value=sec9Score;
var sec10Score=sessionStorage.getItem("sec10Summary");
document.getElementById("SummaryS10").value=sec10Score;
var sec11Score=sessionStorage.getItem("sec11Summary");
document.getElementById("SummaryS11").value=sec11Score;



switch(true)
{
    case totalScore < 150 :{
    document.getElementById("Summary").value="The face to face training session will be of immense value to your organisation. An exciting challenge awaits as you move towards universability. It will take some time but the secret is to keep doing what you are doing well and gradually add other initiatives to make your services more inclusive. The face to face training session will lead to significant learning for your organisation. ";
    break;
    }
    case totalScore < 245 :{
        document.getElementById("Summary").value="While some work is being done to enhance inclusive provision, there is scope for significant gains in this aspect. Building on what you are doing well and embracing new ideas will see your organisation make the transitions to inclusivity with some ease. The face to face training session will be a unique opportunity to learn from others in your sector.";
    break;
    }
    case totalScore < 340:{
        document.getElementById("Summary").value="Your organisation is making genuine and meaningful efforts in the direction of universability.  However provision is probably patchy and inconsistent, which may cause some confusion among members and potential members. Promotion of inclusive opportunities as an organisational priority has the potential to broaden your relevance to an even greater number of community members. ";
    break;
    }
    default:{
        document.getElementById("Summary").value="Your organisation is evidently committed to inclusion.  Your perspective will be most valuable at the face to face training session as both an advocate and a guide for inclusive fitness service provision. You are highly relevant in your community and hence the organisation is sustainable and will remain so once your current commitment is supported and enhanced over time.";
    
    }
}
sessionStorage.clear();