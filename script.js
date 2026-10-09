// ===== TARGET RANK OFFICIAL — FINAL WEBSITE =====
const SUPABASE_URL='https://fhklkzxrpkxcmnqwwfja.supabase.co';
const SUPABASE_PUBLISHABLE_KEY='sb_publishable_laozr0B9W2S682Kc4kpRuA_XwulK_Nq';
const supabaseClient=window.supabase?.createClient(SUPABASE_URL,SUPABASE_PUBLISHABLE_KEY);
let authMode='login';

const tests={
'GK Quick Test':[
['भारत का राष्ट्रीय पशु कौन सा है?',['बाघ','सिंह','हाथी','मोर'],0],
['भारत की राजधानी क्या है?',['मुंबई','नई दिल्ली','कोलकाता','चेन्नई'],1],
['भारतीय संविधान कब लागू हुआ?',['15 अगस्त 1947','26 जनवरी 1950','26 नवंबर 1949','2 अक्टूबर 1950'],1],
['सूर्य के सबसे निकट कौन सा ग्रह है?',['पृथ्वी','शुक्र','बुध','मंगल'],2],
['भारत का राष्ट्रीय खेल आधिकारिक रूप से कौन सा है?',['हॉकी','क्रिकेट','कबड्डी','कोई आधिकारिक राष्ट्रीय खेल नहीं'],3],
['पृथ्वी का उपग्रह कौन है?',['चंद्रमा','मंगल','शुक्र','सूर्य'],0],
['जल का रासायनिक सूत्र क्या है?',['CO2','H2O','O2','NaCl'],1],
['भारत में कितने राज्य हैं?',['26','28','29','30'],1],
['लोकसभा का कार्यकाल सामान्यतः कितने वर्ष है?',['4','5','6','7'],1],
['भारतीय संविधान का संरक्षक किसे माना जाता है?',['संसद','राष्ट्रपति','सर्वोच्च न्यायालय','प्रधानमंत्री'],2]
],
'Indian Polity':[
['भारतीय संविधान की प्रस्तावना में भारत को किस रूप में वर्णित किया गया है?',['संघीय राजतंत्र','सम्पूर्ण प्रभुत्व-संपन्न समाजवादी पंथनिरपेक्ष लोकतांत्रिक गणराज्य','एकात्मक राज्य','धर्मतांत्रिक राज्य'],1],
['अनुच्छेद 14 किससे संबंधित है?',['समानता का अधिकार','स्वतंत्रता का अधिकार','धार्मिक स्वतंत्रता','संवैधानिक उपचार'],0],
['अनुच्छेद 21 किससे संबंधित है?',['शिक्षा','जीवन और व्यक्तिगत स्वतंत्रता','संपत्ति','नागरिकता'],1],
['मौलिक अधिकार संविधान के किस भाग में हैं?',['भाग I','भाग II','भाग III','भाग IV'],2],
['राज्य के नीति-निदेशक तत्व किस भाग में हैं?',['भाग III','भाग IV','भाग V','भाग VI'],1],
['मौलिक कर्तव्य किस अनुच्छेद में हैं?',['32','44','51A','368'],2],
['भारत का संवैधानिक प्रमुख कौन है?',['प्रधानमंत्री','राष्ट्रपति','मुख्य न्यायाधीश','लोकसभा अध्यक्ष'],1],
['राज्यसभा का सभापति कौन होता है?',['राष्ट्रपति','उपराष्ट्रपति','प्रधानमंत्री','लोकसभा अध्यक्ष'],1],
['संविधान संशोधन की प्रक्रिया मुख्यतः किस अनुच्छेद में है?',['356','360','368','370'],2],
['भारत में सर्वोच्च न्यायालय कहाँ स्थित है?',['मुंबई','नई दिल्ली','प्रयागराज','लखनऊ'],1]
],
'Current Affairs':[
['करंट अफेयर्स की जानकारी प्रकाशित करने से पहले क्या करना चाहिए?',['पुरानी जानकारी दोहरानी चाहिए','आधिकारिक/विश्वसनीय स्रोत से सत्यापन करना चाहिए','सोशल मीडिया पोस्ट को पर्याप्त मानना चाहिए','स्रोत की आवश्यकता नहीं'],1],
['सरकारी योजना की जानकारी के लिए प्राथमिक स्रोत क्या होना चाहिए?',['अनाम पोस्ट','आधिकारिक सरकारी वेबसाइट/अधिसूचना','फॉरवर्ड मैसेज','अफवाह'],1],
['अंतरराष्ट्रीय समाचार की पुष्टि के लिए क्या बेहतर है?',['एक असत्यापित पोस्ट','विश्वसनीय समाचार और आधिकारिक स्रोत','केवल कमेंट सेक्शन','मीम पेज'],1],
['किसी रिपोर्ट को नोट करते समय क्या लिखना उपयोगी है?',['रिपोर्ट का नाम, संस्था और मुख्य तथ्य','केवल फोटो','केवल शीर्षक','कुछ नहीं'],0],
['करंट अफेयर्स revision के लिए कौन सा तरीका प्रभावी है?',['साप्ताहिक/मासिक revision','कभी revision नहीं','केवल एक बार पढ़ना','सिर्फ वीडियो देखना'],0],
['परीक्षा में current affairs के लिए क्या महत्वपूर्ण है?',['तथ्य + घटना का संदर्भ','केवल वायरल बातें','केवल मनोरंजन समाचार','अफवाहें'],0],
['किसी आंकड़े को नोट करते समय क्या करना चाहिए?',['स्रोत और तारीख लिखना','स्रोत हटाना','आंकड़ा बदलना','अनुमान लगाना'],0],
['Static GK का अर्थ क्या है?',['स्थायी/बुनियादी सामान्य ज्ञान','आज की खबर','सोशल मीडिया ट्रेंड','विज्ञापन'],0],
['Exam preparation में सबसे सुरक्षित practice क्या है?',['तथ्यों को विश्वसनीय स्रोतों से verify करना','बिना जांच share करना','केवल forwarded messages','पुरानी खबर को नई बताना'],0],
['Daily revision का अच्छा तरीका क्या है?',['छोटे quiz + notes + weekly revision','कभी revision नहीं','केवल headlines','सिर्फ screenshots'],0]
]};
let currentTest=[],currentIndex=0,answers=[],timeLeft=300,timerId=null;

function openAuthModal(mode='login'){authMode=mode;const m=document.getElementById('authModal');m.hidden=false;document.body.classList.add('modal-open');updateAuthUI();setTimeout(()=>document.getElementById('authEmail')?.focus(),80)}
function closeAuthModal(){
  if(!window.__trAuthenticated){return;}
  document.getElementById('authModal').hidden=true;
  document.body.classList.remove('modal-open','auth-required');
}
function setAuthMessage(msg='',err=false){const e=document.getElementById('authMessage');e.textContent=msg;e.className='auth-message '+(err?'error':'success')}
function updateAuthUI(){const s=authMode==='signup';document.getElementById('authTitle').textContent=s?'Create Account':'Welcome Back';document.getElementById('authSubtitle').textContent=s?'Create your free account and start preparing.':'Login to continue your preparation.';document.getElementById('authSubmit').textContent=s?'Create Account':'Login';document.getElementById('forgotBtn').hidden=s;document.getElementById('authSwitchText').innerHTML=s?'Already have an account? <button onclick="toggleAuthMode()">Login</button>':'New here? <button onclick="toggleAuthMode()">Create account</button>';setAuthMessage('')}
function toggleAuthMode(){authMode=authMode==='login'?'signup':'login';updateAuthUI()}
async function signInWithGoogle(){if(!supabaseClient)return setAuthMessage('Login service unavailable. Refresh and try again.',true);const {error}=await supabaseClient.auth.signInWithOAuth({provider:'google',options:{redirectTo:'https://targetrankofficial.netlify.app'}});if(error)setAuthMessage(error.message,true)}
async function handleAuthSubmit(e){
  e.preventDefault();
  if(!supabaseClient)return setAuthMessage('Login service unavailable. Refresh the page.',true);
  const email=document.getElementById('authEmail').value.trim(),password=document.getElementById('authPassword').value;
  document.getElementById('authSubmit').disabled=true;
  setAuthMessage(authMode==='signup'?'Creating your account…':'Signing you in…');
  try{
    if(authMode==='signup'){
      const {data,error}=await supabaseClient.auth.signUp({email,password});
      if(error)throw error;
      if(data.session){
        window.__trAuthenticated=true;
        setAuthMessage('Account created successfully! Opening your dashboard…');
        setTimeout(()=>finishLogin(data.session.user),500);
      }else{
        setAuthMessage('Account created. Please confirm your email, then log in.');
      }
    }else{
      const {data,error}=await supabaseClient.auth.signInWithPassword({email,password});
      if(error)throw error;
      window.__trAuthenticated=true;
      setAuthMessage('Login successful! Opening your dashboard…');
      setTimeout(()=>finishLogin(data.user),400);
    }
  }catch(err){setAuthMessage(err.message||'Something went wrong.',true)}
  finally{document.getElementById('authSubmit').disabled=false}
}
async function sendPasswordReset(){const email=document.getElementById('authEmail').value.trim();if(!email)return setAuthMessage('Enter your email first.',true);const {error}=await supabaseClient.auth.resetPasswordForEmail(email,{redirectTo:'https://targetrankofficial.netlify.app'});setAuthMessage(error?error.message:'Password reset link sent. Check your email.',!!error)}
async function logoutUser(){
  window.__trAuthenticated=false; window.__trUser=null;
  try{if(supabaseClient)await supabaseClient.auth.signOut()}catch(e){}
  updateLoginButton(null); hideDashboard();
  document.getElementById('profileModal').hidden=true;
  document.body.classList.add('auth-required','modal-open');
  const m=document.getElementById('authModal');m.hidden=false;authMode='login';updateAuthUI();
}
function updateLoginButton(user){
  const b=document.getElementById('loginBtn'),p=document.getElementById('profileBtn'),l=document.getElementById('logoutBtn');
  if(user){
    const n=user.user_metadata?.display_name||user.user_metadata?.full_name||user.user_metadata?.name||user.email?.split('@')[0]||'Account';
    if(b){b.textContent=n.length>16?n.slice(0,16)+'…':n;b.onclick=()=>openProfile();}
    if(p)p.hidden=false;if(l)l.hidden=false;
  }else{
    if(b){b.textContent='Login';b.onclick=()=>openAuthModal('login');}
    if(p)p.hidden=true;if(l)l.hidden=true;
  }
}
window.__trAuthenticated=false; window.__trUser=null;
function finishLogin(user){
  if(!user)return;
  window.__trAuthenticated=true;window.__trUser=user;
  updateLoginButton(user);
  document.getElementById('authModal').hidden=true;
  document.body.classList.remove('auth-required','modal-open');
  showDashboard();
  let saved={};try{saved=JSON.parse(localStorage.getItem('trProfile:'+user.id)||'{}')}catch(e){}
  updateProfileSummary({...user.user_metadata,...saved});
}
if(supabaseClient){
  supabaseClient.auth.getSession().then(({data})=>{
    const user=data.session?.user||null;
    if(user){finishLogin(user);}
    else{
      window.__trAuthenticated=false;
      document.body.classList.add('auth-required','modal-open');
      document.getElementById('authModal').hidden=false;
      updateAuthUI();
    }
  }).catch(()=>{
    document.body.classList.add('auth-required','modal-open');
    document.getElementById('authModal').hidden=false;
    setAuthMessage('Please sign in to continue.',true);
  });
  supabaseClient.auth.onAuthStateChange((_e,session)=>{
    if(session?.user){finishLogin(session.user);}
    else if(window.__trAuthenticated){
      window.__trAuthenticated=false;
      document.body.classList.add('auth-required','modal-open');
      document.getElementById('authModal').hidden=false;
      updateAuthUI();
    }
  });
}else{
  document.body.classList.add('auth-required','modal-open');
  document.getElementById('authModal').hidden=false;
}


const stateCities = {
"Andhra Pradesh":["Anantapur","Chittoor","Eluru","Guntur","Kadapa","Kakinada","Kurnool","Machilipatnam","Nellore","Ongole","Rajahmundry","Srikakulam","Tirupati","Vijayawada","Visakhapatnam","Vizianagaram"],
"Arunachal Pradesh":["Aalo","Bomdila","Changlang","Itanagar","Khonsa","Naharlagun","Pasighat","Roing","Tawang","Tezu","Ziro"],
"Assam":["Barpeta","Bongaigaon","Dhubri","Dibrugarh","Diphu","Goalpara","Guwahati","Hailakandi","Jorhat","Kokrajhar","Lakhimpur","Nagaon","Silchar","Tezpur","Tinsukia"],
"Bihar":["Arrah","Begusarai","Bettiah","Bhagalpur","Buxar","Chapra","Darbhanga","Dehri","Gaya","Katihar","Kishanganj","Madhubani","Munger","Muzaffarpur","Patna","Purnia","Samastipur","Sasaram","Siwan"],
"Chhattisgarh":["Ambikapur","Bhilai","Bilaspur","Dhamtari","Durg","Jagdalpur","Janjgir","Kanker","Korba","Mahasamund","Raigarh","Raipur","Rajnandgaon"],
"Goa":["Bicholim","Canacona","Cuncolim","Mapusa","Margao","Panaji","Ponda","Sanquelim","Vasco da Gama"],
"Gujarat":["Ahmedabad","Amreli","Anand","Bharuch","Bhavnagar","Bhuj","Gandhinagar","Godhra","Jamnagar","Junagadh","Mehsana","Morbi","Nadiad","Navsari","Porbandar","Rajkot","Surat","Vadodara","Valsad","Vapi"],
"Haryana":["Ambala","Bhiwani","Charkhi Dadri","Faridabad","Fatehabad","Gurugram","Hisar","Jhajjar","Kaithal","Karnal","Panipat","Rewari","Rohtak","Sirsa","Sonipat","Yamunanagar"],
"Himachal Pradesh":["Bilaspur","Chamba","Dharamshala","Hamirpur","Keylong","Kullu","Mandi","Palampur","Paonta Sahib","Shimla","Solan","Una"],
"Jharkhand":["Bokaro","Chaibasa","Deoghar","Dhanbad","Garhwa","Giridih","Godda","Hazaribagh","Jamshedpur","Medininagar","Phusro","Ramgarh","Ranchi"],
"Karnataka":["Ballari","Belagavi","Bengaluru","Bidar","Davangere","Hassan","Haveri","Hubballi","Kalaburagi","Kolar","Koppal","Mandya","Mangaluru","Mysuru","Raichur","Shivamogga","Tumakuru","Udupi","Vijayapura"],
"Kerala":["Alappuzha","Kannur","Kasaragod","Kochi","Kollam","Kottayam","Kozhikode","Malappuram","Palakkad","Pathanamthitta","Thiruvananthapuram","Thrissur","Wayanad"],
"Madhya Pradesh":["Betul","Bhopal","Chhindwara","Dewas","Dhar","Gwalior","Indore","Itarsi","Jabalpur","Khandwa","Khargone","Morena","Ratlam","Rewa","Sagar","Satna","Sehore","Shivpuri","Ujjain","Vidisha"],
"Maharashtra":["Ahmednagar","Akola","Amravati","Baramati","Beed","Chandrapur","Chhatrapati Sambhajinagar","Kolhapur","Latur","Mumbai","Nagpur","Nashik","Panvel","Parbhani","Pune","Satara","Solapur","Thane","Wardha","Yavatmal"],
"Manipur":["Bishnupur","Churachandpur","Imphal","Kakching","Senapati","Thoubal","Ukhrul"],
"Meghalaya":["Baghmara","Jowai","Nongpoh","Shillong","Tura","Williamnagar"],
"Mizoram":["Aizawl","Champhai","Kolasib","Lawngtlai","Lunglei","Mamit","Serchhip"],
"Nagaland":["Dimapur","Kiphire","Kohima","Longleng","Mokokchung","Mon","Phek","Tuensang","Wokha","Zunheboto"],
"Odisha":["Angul","Balasore","Baripada","Berhampur","Bhadrak","Bhubaneswar","Bolangir","Cuttack","Jajpur","Jharsuguda","Keonjhar","Puri","Rayagada","Rourkela","Sambalpur"],
"Punjab":["Abohar","Amritsar","Anandpur Sahib","Barnala","Bathinda","Fazilka","Firozpur","Gurdaspur","Hoshiarpur","Jalandhar","Ludhiana","Mansa","Moga","Mohali","Pathankot","Patiala","Rupnagar","Sangrur"],
"Rajasthan":["Ajmer","Alwar","Barmer","Bharatpur","Bhilwara","Bikaner","Chittorgarh","Churu","Dausa","Dholpur","Ganganagar","Hanumangarh","Jaipur","Jaisalmer","Jalore","Jhalawar","Jodhpur","Kishangarh","Kota","Kuchaman","Mount Abu","Pali","Sikar","Tonk","Udaipur"],
"Sikkim":["Gangtok","Gyalshing","Mangan","Namchi","Rangpo","Singtam"],
"Tamil Nadu":["Ariyalur","Chengalpattu","Chennai","Coimbatore","Cuddalore","Dindigul","Erode","Hosur","Kanchipuram","Kanyakumari","Karur","Krishnagiri","Madurai","Nagercoil","Namakkal","Perambalur","Pudukkottai","Salem","Thanjavur","Theni","Thoothukudi","Tiruchirappalli","Tirunelveli","Tiruppur","Tiruvallur","Tiruvannamalai","Vellore","Virudhunagar"],
"Telangana":["Adilabad","Bhadrachalam","Hyderabad","Jagtial","Karimnagar","Khammam","Mahbubnagar","Mancherial","Medak","Nalgonda","Nizamabad","Siddipet","Suryapet","Warangal"],
"Tripura":["Agartala","Ambassa","Belonia","Dharmanagar","Kailashahar","Khowai","Udaipur"],
"Uttar Pradesh":["Agra","Amethi","Amroha","Ayodhya","Azamgarh","Baghpat","Bahraich","Ballia","Banda","Barabanki","Bareilly","Basti","Bhadohi","Bijnor","Budaun","Bulandshahr","Deoria","Etah","Etawah","Farrukhabad","Fatehpur","Firozabad","Ghaziabad","Ghazipur","Gonda","Gorakhpur","Hapur","Hardoi","Hathras","Jalaun","Jaunpur","Jhansi","Kanpur","Kasganj","Kaushambi","Kushinagar","Lakhimpur Kheri","Lalitpur","Lucknow","Maharajganj","Mainpuri","Mathura","Mau","Meerut","Mirzapur","Moradabad","Muzaffarnagar","Noida","Pilibhit","Prayagraj","Raebareli","Rampur","Sambhal","Sant Kabir Nagar","Shahjahanpur","Shamli","Shrawasti","Siddharthnagar","Sitapur","Sonbhadra","Sultanpur","Unnao","Varanasi"],
"Uttarakhand":["Almora","Bageshwar","Champawat","Dehradun","Haldwani","Haridwar","Joshimath","Kashipur","Khatima","Lansdowne","Mussoorie","Pithoragarh","Ramnagar","Rishikesh","Roorkee","Tehri","Vikasnagar"],
"West Bengal":["Asansol","Baharampur","Bankura","Bardhaman","Basirhat","Cooch Behar","Durgapur","English Bazar","Howrah","Jalpaiguri","Kolkata","Krishnanagar","Malda","Medinipur","Raiganj","Siliguri"],
"Andaman and Nicobar Islands":["Car Nicobar","Diglipur","Mayabunder","Port Blair","Rangat"],
"Chandigarh":["Chandigarh"],
"Dadra and Nagar Haveli and Daman and Diu":["Amli","Dadra","Daman","Diu","Silvassa","Vapi"],
"Delhi":["Delhi","Dwarka","New Delhi","Rohini","Saket","Shahdara","South Delhi","West Delhi"],
"Jammu and Kashmir":["Anantnag","Bandipora","Baramulla","Doda","Ganderbal","Jammu","Kathua","Kishtwar","Kulgam","Kupwara","Poonch","Pulwama","Rajouri","Ramban","Reasi","Samba","Shopian","Srinagar","Udhampur"],
"Ladakh":["Diskit","Drass","Kargil","Leh","Nyoma"],
"Lakshadweep":["Agatti","Andrott","Kavaratti","Minicoy"],
"Puducherry":["Karaikal","Mahe","Ozhukarai","Puducherry","Villianur","Yanam"]
};
let currentProfilePhoto = '';
// Expand the built-in city lists with a public India cities dataset when online.
// Existing city lists remain available as an offline fallback.
let expandedStateCities = {};
const cityDatasetReady = fetch('https://raw.githubusercontent.com/nshntarora/Indian-Cities-JSON/master/cities.json')
  .then(r => { if(!r.ok) throw new Error('City list unavailable'); return r.json(); })
  .then(rows => {
    const aliases = {'Delhi':'Delhi','Pondicherry':'Puducherry','Jammu and Kashmir':'Jammu and Kashmir','Dadra and Nagar Haveli':'Dadra and Nagar Haveli and Daman and Diu'};
    rows.forEach(row => {
      const state = aliases[row.state] || row.state;
      if(!stateCities[state]) return;
      (expandedStateCities[state] ||= new Set());
      expandedStateCities[state].add(String(row.name||'').trim());
    });
  }).catch(() => {});
function fillStateOptions(selected=''){
  const el=document.getElementById('profileState');
  if(!el)return;
  const states=Object.keys(stateCities).sort((a,b)=>a.localeCompare(b,'en',{sensitivity:'base'}));
  el.innerHTML='<option value="">Select state / UT</option>'+states.map(s=>`<option value="${s.replace(/"/g,'&quot;')}">${s}</option>`).join('');
  if(selected && stateCities[selected])el.value=selected;
}
function updateCities(selected=''){
  const state=document.getElementById('profileState')?.value;
  const cityEl=document.getElementById('profileCity');
  if(!cityEl)return;
  const combined=[...(stateCities[state]||[]), ...((expandedStateCities[state]&&[...expandedStateCities[state]])||[])];
  const cities=[...new Set(combined.map(c=>String(c).trim()).filter(Boolean))].sort((a,b)=>a.localeCompare(b,'en',{sensitivity:'base'}));
  cityEl.innerHTML='<option value="">Select city</option>'+cities.map(c=>`<option value="${c.replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'&lt;')}">${c.replace(/&/g,'&amp;').replace(/</g,'&lt;')}</option>`).join('');
  if(selected && cities.includes(selected)) cityEl.value=selected;
}

cityDatasetReady.then(()=>{const state=document.getElementById('profileState');if(state?.value)updateCities(document.getElementById('profileCity')?.value||'');});
function openProfile(){
  if(!window.__trAuthenticated){openAuthModal('login');setAuthMessage('Please log in to open your profile.',true);return;}
  const modal=document.getElementById('profileModal'); if(!modal)return;
  const user=window.__trUser||{};
  const meta=user.user_metadata||{};
  let saved={};
  try{saved=JSON.parse(localStorage.getItem('trProfile:'+user.id)||'{}')}catch(e){}
  const p={...meta,...saved};
  document.getElementById('profileName').value=p.display_name||p.full_name||p.name||user.email?.split('@')[0]||'';
  document.getElementById('profileEmail').value=user.email||'';
  document.getElementById('profilePhone').value=p.phone_number||'';
  document.getElementById('profileGender').value=p.gender||'';
  document.getElementById('profileTarget').value=p.target_exam||'';
  document.getElementById('profileGoal').value=String(p.daily_goal||'2');
  document.getElementById('profileLanguage').value=p.language||'Hindi';
  fillStateOptions(p.state||''); updateCities(p.city||'');
  const chosen=new Set(p.interests||[]);
  document.querySelectorAll('#profileInterests input[type=checkbox]').forEach(cb=>cb.checked=chosen.has(cb.value));
  currentProfilePhoto=p.photo_data||'';
  renderProfilePhoto();
  document.getElementById('profileMessage').textContent='';
  modal.hidden=false; document.body.classList.add('modal-open');
}
function closeProfile(){const m=document.getElementById('profileModal');if(m)m.hidden=true;document.body.classList.remove('modal-open')}
function previewProfilePhoto(event){
  const file=event.target.files?.[0]; if(!file)return;
  if(!file.type.startsWith('image/')){document.getElementById('profileMessage').textContent='Please choose an image file.';return;}
  if(file.size>2*1024*1024){document.getElementById('profileMessage').textContent='Choose a photo under 2 MB.';event.target.value='';return;}
  const reader=new FileReader();reader.onload=()=>{currentProfilePhoto=reader.result;renderProfilePhoto()};reader.readAsDataURL(file);
}
function renderProfilePhoto(){
  const avatar=document.getElementById('profileAvatarPreview');
  const summary=document.getElementById('summaryAvatar');
  [avatar,summary].forEach(el=>{if(!el)return;el.innerHTML=currentProfilePhoto?`<img src="${currentProfilePhoto}" alt="Profile photo">`:'👤'});
}
async function saveProfile(event){
  event.preventDefault();
  if(!window.__trAuthenticated||!window.__trUser){document.getElementById('profileMessage').textContent='Please log in again.';return;}
  const user=window.__trUser;
  const interests=[...document.querySelectorAll('#profileInterests input[type=checkbox]:checked')].map(cb=>cb.value);
  const profile={
    display_name:document.getElementById('profileName').value.trim(),
    phone_number:document.getElementById('profilePhone').value.trim(),
    gender:document.getElementById('profileGender').value,
    state:document.getElementById('profileState').value,
    city:document.getElementById('profileCity').value,
    interests,
    target_exam:document.getElementById('profileTarget').value,
    daily_goal:document.getElementById('profileGoal').value,
    language:document.getElementById('profileLanguage').value,
    photo_data:currentProfilePhoto
  };
  if(!profile.display_name){document.getElementById('profileMessage').textContent='Please enter your name.';return;}
  try{
    // Persist text profile fields in Supabase user metadata; keep photo locally to avoid requiring a paid/storage setup.
    const {error}=await supabaseClient.auth.updateUser({data:{
      display_name:profile.display_name, phone_number:profile.phone_number, gender:profile.gender,
      state:profile.state, city:profile.city, interests:profile.interests, target_exam:profile.target_exam,
      daily_goal:profile.daily_goal, language:profile.language
    }});
    if(error)throw error;
    localStorage.setItem('trProfile:'+user.id,JSON.stringify(profile));
    window.__trUser={...user,user_metadata:{...(user.user_metadata||{}),...profile}};
    updateLoginButton(window.__trUser); updateProfileSummary(profile);
    document.getElementById('profileMessage').textContent='Profile saved successfully.';
    closeProfile();
  }catch(err){
    // Preserve profile locally even if auth metadata update is temporarily unavailable.
    try{localStorage.setItem('trProfile:'+user.id,JSON.stringify(profile));updateProfileSummary(profile);document.getElementById('profileMessage').textContent='Profile saved on this device. Cloud save failed: '+(err.message||'try again');closeProfile();}
    catch(e){document.getElementById('profileMessage').textContent=err.message||'Could not save profile.'}
  }
}
function updateProfileSummary(profile={}){
  const name=profile.display_name||profile.full_name||window.__trUser?.email?.split('@')[0]||'Your Profile';
  document.getElementById('summaryName').textContent=name;
  document.getElementById('summaryInterests').textContent=(profile.interests||[]).length?(profile.interests||[]).join(' • '):'Choose your target exams and study interests.';
  currentProfilePhoto=profile.photo_data||currentProfilePhoto||'';
  renderProfilePhoto();
}

const menuBtn=document.getElementById('menuBtn'),nav=document.getElementById('nav');menuBtn?.addEventListener('click',()=>nav.classList.toggle('open'));document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));

function startTest(name){if(!window.__trAuthenticated){authMode='login';openAuthModal('login');setAuthMessage('Login is required before starting a mock test.',true);return;}currentTest=tests[name]||tests['GK Quick Test'];currentIndex=0;answers=new Array(currentTest.length).fill(null);timeLeft=300;document.getElementById('testTitle').textContent=name;document.getElementById('testApp').hidden=false;document.getElementById('resultBox').hidden=true;document.getElementById('questionBox').style.display='block';document.querySelector('.test-actions').style.display='flex';document.getElementById('nextBtn').disabled=false;renderQuestion();clearInterval(timerId);timerId=setInterval(tick,1000);document.getElementById('testApp').scrollIntoView({behavior:'smooth',block:'start'})}
function tick(){timeLeft--;updateTimer();if(timeLeft<=0){clearInterval(timerId);finishTest()}}
function updateTimer(){const m=String(Math.max(0,Math.floor(timeLeft/60))).padStart(2,'0'),s=String(Math.max(0,timeLeft%60)).padStart(2,'0');document.getElementById('timer').textContent=`${m}:${s}`}
function renderQuestion(){const q=currentTest[currentIndex];document.getElementById('testProgress').textContent=`Question ${currentIndex+1} of ${currentTest.length}`;document.getElementById('progressBar').style.width=((currentIndex+1)/currentTest.length*100)+'%';let out=`<div class="question">${currentIndex+1}. ${q[0]}</div><div class="options">`;q[1].forEach((o,i)=>out+=`<button class="option ${answers[currentIndex]===i?'selected':''}" onclick="selectAnswer(${i})">${String.fromCharCode(65+i)}. ${o}</button>`);out+='</div>';document.getElementById('questionBox').innerHTML=out;document.getElementById('prevBtn').disabled=currentIndex===0;document.getElementById('nextBtn').textContent=currentIndex===currentTest.length-1?'Submit Test':'Next →';updateTimer()}
function selectAnswer(i){answers[currentIndex]=i;renderQuestion()}function prevQuestion(){if(currentIndex>0){currentIndex--;renderQuestion()}}function nextQuestion(){if(currentIndex<currentTest.length-1){currentIndex++;renderQuestion()}else finishTest()}
function finishTest(){clearInterval(timerId);let score=0;currentTest.forEach((q,i)=>{if(answers[i]===q[2])score++});const total=currentTest.length,pct=Math.round(score/total*100),wrong=currentTest.filter((q,i)=>answers[i]!==null&&answers[i]!==q[2]).length,skipped=currentTest.filter((q,i)=>answers[i]===null).length,accuracy=answers.filter(x=>x!==null).length?Math.round(score/answers.filter(x=>x!==null).length*100):0;saveHistory({title:document.getElementById('testTitle').textContent,score,total,percent:pct,accuracy,date:new Date().toISOString()});const review=currentTest.map((q,i)=>{const u=answers[i],ok=u===q[2],status=u===null?'Skipped':ok?'Correct':'Wrong';return `<div class="answer-row ${status.toLowerCase()}"><div><b>Q${i+1}. ${q[0]}</b><small>Your answer: ${u===null?'Not attempted':q[1][u]}</small>${!ok?`<small class="correct-answer">Correct answer: ${q[1][q[2]]}</small>`:''}</div><strong>${status}</strong></div>`}).join('');const box=document.getElementById('resultBox');box.hidden=false;box.innerHTML=`<h3>${score}/${total}</h3><p>${pct}% Score • ${pct>=80?'Excellent preparation! 🎯':pct>=50?'Good job! Keep practicing.':'Keep practicing and revise the basics.'}</p><div class="result-summary"><span>✅ Correct <b>${score}</b></span><span>❌ Wrong <b>${wrong}</b></span><span>⏭️ Skipped <b>${skipped}</b></span></div><h4 class="review-title">Question-wise Review</h4><div class="answer-review">${review}</div><button class="btn primary" onclick="startTest(document.getElementById('testTitle').textContent)">Retry Test</button>`;document.getElementById('questionBox').style.display='none';document.querySelector('.test-actions').style.display='none';box.scrollIntoView({behavior:'smooth',block:'center'});renderDashboard()}

function getHistory(){try{return JSON.parse(localStorage.getItem('tr_history')||'[]')}catch(e){return[]}}
function saveHistory(x){const h=getHistory();h.unshift(x);localStorage.setItem('tr_history',JSON.stringify(h.slice(0,30)))}
function showDashboard(){const d=document.getElementById('dashboard');d.hidden=false;renderDashboard();d.scrollIntoView({behavior:'smooth'})}
function hideDashboard(){document.getElementById('dashboard').hidden=true}
function renderDashboard(){const h=getHistory(),attempts=h.length,best=h.reduce((m,x)=>Math.max(m,x.percent||0),0),acc=h.length?Math.round(h.reduce((s,x)=>s+(x.accuracy||0),0)/h.length):0;document.getElementById('statAttempts').textContent=attempts;document.getElementById('statBest').textContent=best+'%';document.getElementById('statAccuracy').textContent=acc+'%';const box=document.getElementById('historyList');box.innerHTML=h.length?h.slice(0,10).map(x=>`<div class="history-item"><div><b>${x.title}</b><small>${new Date(x.date).toLocaleDateString()} • Accuracy ${x.accuracy}%</small></div><b>${x.score}/${x.total} (${x.percent}%)</b></div>`).join(''):'<div class="empty">No test attempted yet. Start your first mock test.</div>'}
function clearHistory(){localStorage.removeItem('tr_history');renderDashboard()}
function filterLibrary(){const q=document.getElementById('librarySearch').value.toLowerCase(),f=document.getElementById('libraryFilter').value;document.querySelectorAll('.library-card').forEach(c=>{const tags=c.dataset.tags||'',okText=c.innerText.toLowerCase().includes(q),okFilter=f==='all'||tags.includes(f);c.style.display=okText&&okFilter?'block':'none'})}
const demoLeaders=[['1','Harshit','98%','10'],['2','Target Rank Student','94%','9'],['3','Exam Aspirant','91%','8'],['4','Rank Targeter','88%','8'],['5','Future Officer','84%','7']];document.getElementById('leaderboardList').innerHTML=demoLeaders.map((x,i)=>`<div class="rank-row"><span class="rank">${x[0]}</span><div><b>${x[1]}</b><small>Practice score</small></div><span class="score">${x[2]}</span><span class="accuracy">${x[3]} tests</span></div>`).join('');
function showToast(msg){const t=document.getElementById('toast');t.textContent=msg;t.classList.add('show');clearTimeout(window.__toast);window.__toast=setTimeout(()=>t.classList.remove('show'),2200)}
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!document.getElementById('authModal').hidden)closeAuthModal()});
