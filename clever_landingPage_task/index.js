let left=document.getElementById('left_arrow');
let right= document.getElementById('right_arrow');
let brand_text=document.getElementById('brand_text');
let founder_img=document.getElementById('founder_img');
let founder_name=document.getElementById('founder_name');
let brand_name= document.getElementById('brand_name');
let brand_logo=document.getElementById('brand_logo');
let brand_logo_container=document.getElementById("brand_logo_container");
let review_card1=document.getElementById('r-card1');
let review_card2=document.getElementById('r-card2');
let readStoryCard=document.getElementById('readStoryContainer');
let review_right_image=document.getElementById('review_right_image');

const change_content_right=()=>{
    brand_text.innerHTML="As Co-founders, we had zero clue on the real time stock levels in our warehouse. It felt like a battle to manually update invoices from EE to Zoho, so that at least some data points can be tracked. While we had already implemented CleverBooks I had no clue that they could make this API integration work for us and exactly the way we wanted it to work. Thank you team Rahul Vishwakarma & Yogesh Byahatti for identifying the problem and being so quick with the solution, kudos to the amazing team you have."
    founder_img.setAttribute('src', 'https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/664ddd1080709540ff764308_P-Tal%20founder.jpg')
    founder_name.innerHTML="Kirti Goel";
    brand_name.innerHTML="P-TAL";
    brand_logo.setAttribute('src', 'https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/664d8f654c71b6204bdf301c_P%20TAL%20logo.svg')
    review_card1.innerHTML="<ul><li>Automated</li><li>Invoice</li><li>Reconciliation</li></ul>"
    review_card1.classList.add("r-card-ul");
    review_card2.innerHTML="<ul><li>Channel wise</li> <li>Sales</li> <li>Classification</li></ul>"
    review_card2.classList.add("r-card-ul");
    readStoryCard.style["visibility"]="hidden";
    review_right_image.setAttribute('src','https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/664c90f75b0f0e735016706b_P-tal-p-500.webp');
    review_right_image.style["height"]="540px";
    brand_logo_container.style["padding-left"]="80px";
}

const change_content_left=()=>{
    brand_text.innerHTML="D2C brands face issues with supply chain management and high growth startups are not equipped to run their demand forecast manually. CleverBooks automates all the workflows and helps brands predict high demand periods and be ready to cater to customer demands. It has a direct impact on the revenue readiness of a company and that's the value we see CleverBooks unlocking for many companies in the future. Rahul and team have built a robust product with years of their experience distilled into the workflows."
    founder_img.setAttribute('src', 'https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/651c00235cd9c2cd10fb1976_Samosa%20Party%20Client%20Image.webp')
    founder_name.innerHTML="Diksha Pande";
    brand_name.innerHTML="Samosa Party";
    brand_logo.setAttribute('src', 'https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63a48634ed59555eb9125770_samosa.svg')
    review_card1.innerHTML="<h2>upto 95%</h2><p>Demand Fulfilment</p>"
    review_card1.classList.remove("r-card-ul");
    review_card2.innerHTML="<h2>< 3%</h2><p>Daily-Stock-out</p>"
    review_card2.classList.remove("r-card-ul");
    readStoryCard.style["visibility"]="visible";
    review_right_image.setAttribute('src','samosa.png');
    review_right_image.style["height"]="490px"; 
}
