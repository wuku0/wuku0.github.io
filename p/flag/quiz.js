// Array of quiz questions and answers
var quizData = [
{
  question: "Which country does this flag belong to?",
  image: "webp/ad.webp",
  options: ["Andorra", "Romania", "Argentina", "Colombia"],
  answer: 0
},
{
  question: "Which country does this flag belong to?",
  image: "webp/ae.webp",
  options: ["Iceland", "Moldova", "United Arab Emirates", "Jordan"],
  answer: 2
},
{
  question: "Which country does this flag belong to?",
  image: "webp/af.webp",
  options: ["Nepal", "Maldives", "Bahrain","Afghanistan",],
  answer: 3
},
{
  question: "Which country does this flag belong to?",
  image: "webp/ag.webp",
  options: ["South Africa", "Antigua and Barbuda", "France", "Solomon Islands"],
  answer: 1
},
{
question: "Which country does this flag belong to?",
image: "webp/al.webp",
options: ["Tanzania", "Albania", "Senegal", "Bulgaria"],
answer: 1
},
{
question: "Which country does this flag belong to?",
image: "webp/ad.webp",
options: ["Andorra", "Romania", "Argentina", "Colombia"],
answer: 0
},
{
question: "Which country does this flag belong to?",
image: "webp/ao.webp",
options: ["Angola", "Cyprus", "Luxembourg", "Netherlands"],
answer: 0
},
{
question: "Which country does this flag belong to?",
image: "webp/ag.webp",
options: ["South Africa", "Antigua and Barbuda", "France", "Solomon Islands"],
answer: 1
},
{
question: "Which country does this flag belong to?",
image: "webp/ar.webp",
options: ["Austria", "Germany", "Argentina", "Turkey"],
answer: 2
},
{
question: "Which country does this flag belong to?",
image: "webp/am.webp",
options: ["Belgium", "Armenia", "Greece", "Italy"],
answer: 1
},
{
question: "Which country does this flag belong to?",
image: "webp/au.webp",
options: ["Australia", "Egypt", "India", "Jamaica"],
answer: 0
},
{
question: "Which country does this flag belong to?",
image: "webp/at.webp",
options: ["Argentina", "Austria", "Bolivia", "Czech Republic"],
answer: 1
},
{
question: "Which country does this flag belong to?",
image: "webp/az.webp",
options: ["Hungary", "Kazakhstan", "Azerbaijan", "Malaysia"],
answer: 2
},
{
question: "Which country does this flag belong to?",
image: "webp/bh.webp",
options: ["Bahrain", "Maldives", "Sri Lanka", "Palestine"],
answer: 0
},
{
question: "Which country does this flag belong to?",
image: "webp/bd.webp",
options: ["Bhutan", "Dominica", "Latvia", "Bangladesh"],
answer: 3
},
{
question: "Which country does this flag belong to?",
image: "webp/bb.webp",
options: ["Seychelles", "Barbados", "Trinidad and Tobago", "Gambia"],
answer: 1
},
{
question: "Which country does this flag belong to?",
image: "webp/by.webp",
options: ["Denmark", "Finland", "Belarus", "Ireland"],
answer: 2
},
{
question: "Which country does this flag belong to?",
image: "webp/be.webp",
options: ["France", "Belgium", "Netherlands", "Portugal"],
answer: 1
},
{
question: "Which country does this flag belong to?",
image: "webp/bz.webp",
options: ["Zimbabwe", "Belize", "Greece", "Serbia"],
answer: 1
},
{
question: "Which country does this flag belong to?",
image: "webp/bj.webp",
options: ["Benin", "Togo", "Malaysia", "Uruguay"],
answer: 0
},
{
question: "Which country does this flag belong to?",
image: "webp/bt.webp",
options: ["Kiribati", "Tuvalu", "Bhutan", "Sudan"],
answer: 2
},
{
question: "Which country does this flag belong to?",
image: "webp/bo.webp",
options: ["Paraguay", "Honduras", "Bolivia", "Tunisia"],
answer: 2
},
{
question: "Which country does this flag belong to?",
image: "webp/ba.webp",
options: ["Iran", "Montenegro", "Bosnia and Herzegovina", "Uzbekistan"],
answer: 2
},
{
question: "Which country does this flag belong to?",
image: "webp/bw.webp",
options: ["Botswana", "Malawi", "Nigeria", "Slovenia"],
answer: 0
},
{
question: "Which country does this flag belong to?",
image: "webp/br.webp",
options: ["Brazil", "Mexico", "Peru", "Chile"],
answer: 0
},
{
question: "Which country does this flag belong to?",
image: "webp/bn.webp",
options: ["Oman", "Malaysia", "Brunei", "Indonesia"],
answer: 2
},
{
question: "Which country does this flag belong to?",
image: "webp/bg.webp",
options: ["Portugal", "Croatia", "Bulgaria", "Sweden"],
answer: 2
},
{
question: "Which country does this flag belong to?",
image: "webp/bf.webp",
options: ["Ethiopia", "Chad", "Uganda", "Burkina Faso"],
answer: 3
},
{
question: "Which country does this flag belong to?",
image: "webp/bi.webp",
options: ["Burundi", "Gabon", "Haiti", "Mauritania"],
answer: 0
},
{
question: "Which country does this flag belong to?",
image: "webp/kh.webp",
options: ["Myanmar", "Cambodia", "Laos", "Vietnam"],
answer: 1
},
{
question: "Which country does this flag belong to?",
image: "webp/cm.webp",
options: ["Cameroon", "Congo", "Malaysia", "Tanzania"],
answer: 0
},
{
question: "Which country does this flag belong to?",
image: "webp/ca.webp",
options: ["Canada", "United States", "United Kingdom", "Australia"],
answer: 0
},
{
question: "Which country does this flag belong to?",
image: "webp/cv.webp",
options: ["Cabo Verde", "Suriname", "Egypt", "Czech Republic"],
answer: 0
},
{
question: "Which country does this flag belong to?",
image: "webp/cf.webp",
options: ["Seychelles", "Central African Republic", "Honduras", "Moldova"],
answer: 1
},
{
question: "Which country does this flag belong to?",
image: "webp/td.webp",
options: ["Nigeria", "Chad", "Zambia", "Sudan"],
answer: 1
},
{
question: "Which country does this flag belong to?",
image: "webp/cl.webp",
options: ["Cuba", "Argentina", "Chile", "Bolivia"],
answer: 2
},
{
question: "Which country does this flag belong to?",
image: "webp/cn.webp",
options: ["China", "India", "Japan", "Russia"],
answer: 0
},
{
question: "Which country does this flag belong to?",
image: "webp/co.webp",
options: ["Colombia", "Ecuador", "Brazil", "Mexico"],
answer: 0
},
{
question: "Which country does this flag belong to?",
image: "webp/km.webp",
options: ["Comoros", "Lesotho", "Qatar", "Morocco"],
answer: 0
},
{
question: "Which country does this flag belong to?",
image: "webp/cg.webp",
options: ["Nigeria", "Congo", "Mali", "Ukraine"],
answer: 1
},
{
question: "Which country does this flag belong to?",
image: "webp/cd.webp",
options: ["Tanzania", "Algeria", "Democratic Republic of the Congo", "Madagascar"],
answer: 2
},
{
question: "Which country does this flag belong to?",
image: "webp/ck.webp",
options: ["Maldives", "Greece", "Cook Islands", "Seychelles"],
answer: 2
},
{
question: "Which country does this flag belong to?",
image: "webp/cr.webp",
options: ["Jamaica", "Costa Rica", "Panama", "Puerto Rico"],
answer: 1
},
{
question: "Which country does this flag belong to?",
image: "webp/hr.webp",
options: ["Croatia", "Estonia", "Hungary", "Serbia"],
answer: 0
},
{
question: "Which country does this flag belong to?",
image: "webp/cu.webp",
options: ["Cuba", "Dominican Republic", "Belize", "Guatemala"],
answer: 0
},
{
question: "Which country does this flag belong to?",
image: "webp/cy.webp",
options: ["Albania", "Montenegro", "Cyprus", "Netherlands"],
answer: 2
},
{
question: "Which country does this flag belong to?",
image: "webp/cz.webp",
options: ["Slovakia", "Czech Republic", "Denmark", "Norway"],
answer: 1
},
{
question: "Which country does this flag belong to?",
image: "webp/dk.webp",
options: ["Belgium", "Germany", "Denmark", "Finland"],
answer: 2
},
{
question: "Which country does this flag belong to?",
image: "webp/dj.webp",
options: ["Mauritania", "Djibouti", "Lebanon", "Oman"],
answer: 1
},
{
question: "Which country does this flag belong to?",
image: "webp/dm.webp",
options: ["Dominica", "Guatemala", "Maldives", "Panama"],
answer: 0
},
{
question: "Which country does this flag belong to?",
image: "webp/do.webp",
options: ["Dominican Republic", "El Salvador", "Honduras", "Nicaragua"],
answer: 0
},
{
question: "Which country does this flag belong to?",
image: "webp/tl.webp",
options: ["Philippines", "Malaysia", "Timor-Leste", "Brunei"],
answer: 2
},
{
question: "Which country does this flag belong to?",
image: "webp/ec.webp",
options: ["Colombia", "Ecuador", "Peru", "Venezuela"],
answer: 1
},
{
question: "Which country does this flag belong to?",
image: "webp/eg.webp",
options: ["Saudi Arabia", "Egypt", "Yemen", "Jordan"],
answer: 1
},
{
question: "Which country does this flag belong to?",
image: "webp/sv.webp",
options: ["Bolivia", "El Salvador", "Guatemala", "Honduras"],
answer: 1
},
{
question: "Which country does this flag belong to?",
image: "webp/gq.webp",
options: ["Equatorial Guinea", "Guinea-Bissau", "Mozambique", "Somalia"],
answer: 0
},
{
question: "Which country does this flag belong to?",
image: "webp/er.webp",
options: ["Eritrea", "Lesotho", "Namibia", "Togo"],
answer: 0
},
{
question: "Which country does this flag belong to?",
image: "webp/ee.webp",
options: ["Estonia", "Iceland", "Lithuania", "Slovakia"],
answer: 0
},
{
question: "Which country does this flag belong to?",
image: "webp/et.webp",
options: ["Ethiopia", "Ghana", "Mali", "Zimbabwe"],
answer: 0
},
{
question: "Which country does this flag belong to?",
image: "webp/fj.webp",
options: ["Indonesia", "Kiribati", "Fiji", "Tonga"],
answer: 2
},
{
question: "Which country does this flag belong to?",
image: "webp/fi.webp",
options: ["Finland", "Norway", "Sweden", "Iceland"],
answer: 0
},
{
question: "Which country does this flag belong to?",
image: "webp/fr.webp",
options: ["France", "Spain", "Italy", "Germany"],
answer: 0
},
{
question: "Which country does this flag belong to?",
image: "webp/ga.webp",
options: ["Angola", "Cameroon", "Gabon", "Mali"],
answer: 2
},
{
question: "Which country does this flag belong to?",
image: "webp/gm.webp",
options: ["Mauritania", "Niger", "Gambia", "Senegal"],
answer: 2
},
{
question: "Which country does this flag belong to?",
image: "webp/ge.webp",
options: ["Georgia", "Ukraine", "Romania", "Armenia"],
answer: 0
},
{
question: "Which country does this flag belong to?",
image: "webp/de.webp",
options: ["Netherlands", "Belgium", "Germany", "Switzerland"],
answer: 2
},
{
question: "Which country does this flag belong to?",
image: "webp/gh.webp",
options: ["Nigeria", "Ghana", "Togo", "Sierra Leone"],
answer: 1
},
{
question: "Which country does this flag belong to?",
image: "webp/gr.webp",
options: ["Cyprus", "Greece", "Albania", "Bulgaria"],
answer: 1
},
{
question: "Which country does this flag belong to?",
image: "webp/gd.webp",
options: ["Antigua and Barbuda", "Saint Kitts and Nevis", "Grenada", "Dominica"],
answer: 2
},
{
question: "Which country does this flag belong to?",
image: "webp/gt.webp",
options: ["Costa Rica", "Honduras", "Guatemala", "Panama"],
answer: 2
},
{
question: "Which country does this flag belong to?",
image: "webp/gn.webp",
options: ["Liberia", "Guinea", "Ivory Coast", "Senegal"],
answer: 1
},
{
question: "Which country does this flag belong to?",
image: "webp/gw.webp",
options: ["Guinea-Bissau", "Cabo Verde", "Equatorial Guinea", "Seychelles"],
answer: 0
},
{
question: "Which country does this flag belong to?",
image: "webp/gy.webp",
options: ["Guyana", "Suriname", "Trinidad and Tobago", "Jamaica"],
answer: 0
},
{
question: "Which country does this flag belong to?",
image: "webp/ht.webp",
options: ["Haiti", "Bahamas", "Cuba", "Jamaica"],
answer: 0
},
{
question: "Which country does this flag belong to?",
image: "webp/hn.webp",
options: ["Nicaragua", "Panama", "Costa Rica", "Honduras"],
answer: 3
},
{
question: "Which country does this flag belong to?",
image: "webp/hu.webp",
options: ["Slovenia", "Hungary", "Macedonia", "Albania"],
answer: 1
},
{
question: "Which country does this flag belong to?",
image: "webp/is.webp",
options: ["Norway", "Finland", "Iceland", "Denmark"],
answer: 2
},
{
question: "Which country does this flag belong to?",
image: "webp/in.webp",
options: ["India", "Indonesia", "Iran", "Iraq"],
answer: 0
},
{
question: "Which country does this flag belong to?",
image: "webp/id.webp",
options: ["Philippines", "Thailand", "Malaysia", "Indonesia"],
answer: 3
},
{
question: "Which country does this flag belong to?",
image: "webp/ir.webp",
options: ["Iran", "Afghanistan", "Pakistan", "Iraq"],
answer: 0
},
{
question: "Which country does this flag belong to?",
image: "webp/iq.webp",
options: ["Jordan", "Syria", "Saudi Arabia", "Iraq"],
answer: 3
},
{
question: "Which country does this flag belong to?",
image: "webp/ie.webp",
options: ["Ireland", "Scotland", "United Kingdom", "Wales"],
answer: 0
},
{
question: "Which country does this flag belong to?",
image: "webp/il.webp",
options: ["Egypt", "Israel", "Lebanon", "Syria"],
answer: 1
},
{
question: "Which country does this flag belong to?",
image: "webp/it.webp",
options: ["Spain", "Italy", "Greece", "France"],
answer: 1
},
{
question: "Which country does this flag belong to?",
image: "webp/jm.webp",
options: ["Bahamas", "Cuba", "Jamaica", "Haiti"],
answer: 2
},
{
question: "Which country does this flag belong to?",
image: "webp/jp.webp",
options: ["China", "Japan", "Korea", "Vietnam"],
answer: 1
},
{
question: "Which country does this flag belong to?",
image: "webp/jo.webp",
options: ["Iraq", "Jordan", "Lebanon", "Kuwait"],
answer: 1
},
{
question: "Which country does this flag belong to?",
image: "webp/kz.webp",
options: ["Kazakhstan", "Kyrgyzstan", "Turkmenistan", "Uzbekistan"],
answer: 0
},
{
question: "Which country does this flag belong to?",
image: "webp/ke.webp",
options: ["Kenya", "Tanzania", "Uganda", "Rwanda"],
answer: 0
},
{
question: "Which country does this flag belong to?",
image: "webp/ki.webp",
options: ["Kiribati", "Marshall Islands", "Fiji", "Solomon Islands"],
answer: 0
},
{
question: "Which country does this flag belong to?",
image: "webp/kw.webp",
options: ["Bahrain", "Kuwait", "Qatar", "Oman"],
answer: 1
},
{
question: "Which country does this flag belong to?",
image: "webp/kg.webp",
options: ["Kazakhstan", "Kyrgyzstan", "Uzbekistan", "Tajikistan"],
answer: 1
},
{
question: "Which country does this flag belong to?",
image: "webp/la.webp",
options: ["Cambodia", "Vietnam", "Laos", "Myanmar"],
answer: 2
},
{
question: "Which country does this flag belong to?",
image: "webp/lv.webp",
options: ["Slovenia", "Latvia", "Lithuania", "Estonia"],
answer: 1
},
{
question: "Which country does this flag belong to?",
image: "webp/lb.webp",
options: ["Jordan", "Syria", "Lebanon", "Egypt"],
answer: 2
},
{
question: "Which country does this flag belong to?",
image: "webp/ls.webp",
options: ["Malawi", "Lesotho", "Zimbabwe", "Botswana"],
answer: 1
},
{
question: "Which country does this flag belong to?",
image: "webp/lr.webp",
options: ["Sierra Leone", "Ghana", "Liberia", "Guinea"],
answer: 2
},
{
question: "Which country does this flag belong to?",
image: "webp/ly.webp",
options: ["Yemen", "Qatar", "Oman", "Libya"],
answer: 3
},
{
question: "Which country does this flag belong to?",
image: "webp/li.webp",
options: ["Iceland", "Luxembourg", "Liechtenstein", "Latvia"],
answer: 2
},
{
question: "Which country does this flag belong to?",
image: "webp/lt.webp",
options: ["Estonia", "Lithuania", "Latvia", "Croatia"],
answer: 1
},
{
question: "Which country does this flag belong to?",
image: "webp/lu.webp",
options: ["Belgium", "Luxembourg", "Netherlands", "Germany"],
answer: 1
},
{
question: "Which country does this flag belong to?",
image: "webp/mg.webp",
options: ["Madagascar", "Mauritius", "Comoros", "Seychelles"],
answer: 0
},
{
question: "Which country does this flag belong to?",
image: "webp/mw.webp",
options: ["Mozambique", "Malawi", "Namibia", "Zambia"],
answer: 1
},
{
question: "Which country does this flag belong to?",
image: "webp/my.webp",
options: ["Thailand", "Indonesia", "Malaysia", "Singapore"],
answer: 2
},
{
question: "Which country does this flag belong to?",
image: "webp/mv.webp",
options: ["Sri Lanka", "Maldives", "Mauritius", "Seychelles"],
answer: 1
},
{
question: "Which country does this flag belong to?",
image: "webp/ml.webp",
options: ["Senegal", "Burkina Faso", "Niger", "Mali"],
answer: 3
},
{
question: "Which country does this flag belong to?",
image: "webp/mt.webp",
options: ["Greece", "Italy", "Malta", "Cyprus"],
answer: 2
},
{
question: "Which country does this flag belong to?",
image: "webp/mh.webp",
options: ["Micronesia", "Marshall Islands", "Palau", "Nauru"],
answer: 1
},
{
question: "Which country does this flag belong to?",
image: "webp/mr.webp",
options: ["Senegal", "Mauritania", "Niger", "Mali"],
answer: 1
},
{
question: "Which country does this flag belong to?",
image: "webp/mu.webp",
options: ["Madagascar", "Mauritius", "Maldives", "Comoros"],
answer: 1
},
{
question: "Which country does this flag belong to?",
image: "webp/mx.webp",
options: ["Chile", "Mexico", "Argentina", "Peru"],
answer: 1
},
{
question: "Which country does this flag belong to?",
image: "webp/fm.webp",
options: ["Solomon Islands", "Marshall Islands", "Fiji", "Micronesia"],
answer: 3
},
{
question: "Which country does this flag belong to?",
image: "webp/md.webp",
options: ["Moldova", "Armenia", "Georgia", "Ukraine"],
answer: 0
},
{
question: "Which country does this flag belong to?",
image: "webp/mc.webp",
options: ["Andorra", "Monaco", "San Marino", "Vatican City"],
answer: 1
},
{
question: "Which country does this flag belong to?",
image: "webp/mn.webp",
options: ["Mongolia", "Nepal", "Bhutan", "Tibet"],
answer: 0
},
{
question: "Which country does this flag belong to?",
image: "webp/me.webp",
options: ["Croatia", "Montenegro", "Slovenia", "Bosnia and Herzegovina"],
answer: 1
},
{
question: "Which country does this flag belong to?",
image: "webp/ma.webp",
options: ["Algeria", "Morocco", "Tunisia", "Egypt"],
answer: 1
},
{
question: "Which country does this flag belong to?",
image: "webp/mz.webp",
options: ["Mozambique", "Malawi", "Zimbabwe", "Namibia"],
answer: 0
},
{
question: "Which country does this flag belong to?",
image: "webp/mm.webp",
options: ["Laos", "Cambodia", "Vietnam", "Myanmar"],
answer: 3
},
{
question: "Which country does this flag belong to?",
image: "webp/na.webp",
options: ["South Africa", "Zimbabwe", "Namibia", "Botswana"],
answer: 2
},
{
question: "Which country does this flag belong to?",
image: "webp/nr.webp",
options: ["Vanuatu", "Kiribati", "Palau", "Nauru"],
answer: 3
},
{
question: "Which country does this flag belong to?",
image: "webp/np.webp",
options: ["Bangladesh", "Nepal", "Bhutan", "Sri Lanka"],
answer: 1
},
{
question: "Which country does this flag belong to?",
image: "webp/nl.webp",
options: ["Belgium", "Luxembourg", "Netherlands", "Germany"],
answer: 2
},
{
question: "Which country does this flag belong to?",
image: "webp/nz.webp",
options: ["Australia", "New Zealand", "Fiji", "Samoa"],
answer: 1
},
{
question: "Which country does this flag belong to?",
image: "webp/ni.webp",
options: ["Honduras", "El Salvador", "Nicaragua", "Costa Rica"],
answer: 2
},
{
question: "Which country does this flag belong to?",
image: "webp/ne.webp",
options: ["Ghana", "Burkina Faso", "Niger", "Togo"],
answer: 2
},
{
question: "Which country does this flag belong to?",
image: "webp/ng.webp",
options: ["Nigeria", "Kenya", "Tanzania", "Uganda"],
answer: 0
},
{
question: "Which country does this flag belong to?",
image: "webp/nu.webp",
options: ["Cook Islands", "Palau", "Nauru", "Niue"],
answer: 3
},
{
question: "Which country does this flag belong to?",
image: "webp/kp.webp",
options: ["China", "South Korea", "North Korea", "Japan"],
answer: 2
},
{
question: "Which country does this flag belong to?",
image: "webp/no.webp",
options: ["Sweden", "Norway", "Denmark", "Finland"],
answer: 1
},
{
question: "Which country does this flag belong to?",
image: "webp/om.webp",
options: ["Bahrain", "Kuwait", "Oman", "Qatar"],
answer: 2
},
{
question: "Which country does this flag belong to?",
image: "webp/pk.webp",
options: ["Iran", "Pakistan", "Afghanistan", "Iraq"],
answer: 1
},
{
question: "Which country does this flag belong to?",
image: "webp/pw.webp",
options: ["Fiji", "Marshall Islands", "Palau", "Micronesia"],
answer: 2
},
{
question: "Which country does this flag belong to?",
image: "webp/pa.webp",
options: ["Panama", "Costa Rica", "Honduras", "Nicaragua"],
answer: 0
},
{
question: "Which country does this flag belong to?",
image: "webp/pg.webp",
options: ["Solomon Islands", "Papua New Guinea", "Vanuatu", "Fiji"],
answer: 1
},
{
question: "Which country does this flag belong to?",
image: "webp/py.webp",
options: ["Argentina", "Uruguay", "Chile", "Paraguay"],
answer: 3
},
{
question: "Which country does this flag belong to?",
image: "webp/pe.webp",
options: ["Colombia", "Ecuador", "Bolivia", "Peru"],
answer: 3
},
{
question: "Which country does this flag belong to?",
image: "webp/ph.webp",
options: ["Philippines", "Vietnam", "Thailand", "Indonesia"],
answer: 0
},
{
question: "Which country does this flag belong to?",
image: "webp/pl.webp",
options: ["Poland", "Slovakia", "Czech Republic", "Hungary"],
answer: 0
},
{
question: "Which country does this flag belong to?",
image: "webp/pt.webp",
options: ["Spain", "Portugal", "Italy", "France"],
answer: 1
},
{
question: "Which country does this flag belong to?",
image: "webp/qa.webp",
options: ["Kuwait", "Bahrain", "Qatar", "Oman"],
answer: 2
},
{
question: "Which country does this flag belong to?",
image: "webp/ro.webp",
options: ["Slovakia", "Romania", "Moldova", "Serbia"],
answer: 1
},
{
question: "Which country does this flag belong to?",
image: "webp/ru.webp",
options: ["Russia", "Ukraine", "Belarus", "Kazakhstan"],
answer: 0
},
{
question: "Which country does this flag belong to?",
image: "webp/rw.webp",
options: ["Uganda", "Kenya", "Rwanda", "Tanzania"],
answer: 2
},
{
question: "Which country does this flag belong to?",
image: "webp/kn.webp",
options: ["Saint Kitts and Nevis", "Saint Vincent and the Grenadines", "Saint Lucia", "Antigua and Barbuda"],
answer: 0
},
{
question: "Which country does this flag belong to?",
image: "webp/lc.webp",
options: ["Grenada", "Dominica", "Saint Lucia", "Trinidad and Tobago"],
answer: 2
},
{
question: "Which country does this flag belong to?",
image: "webp/vc.webp",
options: ["Jamaica", "Saint Vincent and the Grenadines", "Barbados", "Bahamas"],
answer: 1
},
{
question: "Which country does this flag belong to?",
image: "webp/ws.webp",
options: ["Solomon Islands", "Fiji", "Samoa", "Vanuatu"],
answer: 2
},
{
question: "Which country does this flag belong to?",
image: "webp/sm.webp",
options: ["Italy", "San Marino", "Monaco", "Andorra"],
answer: 1
},
{
question: "Which country does this flag belong to?",
image: "webp/st.webp",
options: ["Gabon", "São Tomé and Príncipe", "Equatorial Guinea", "Cameroon"],
answer: 1
},
{
question: "Which country does this flag belong to?",
image: "webp/sa.webp",
options: ["United Arab Emirates", "Saudi Arabia", "Kuwait", "Qatar"],
answer: 1
},
{
question: "Which country does this flag belong to?",
image: "webp/sn.webp",
options: ["Ghana", "Senegal", "Nigeria", "Cameroon"],
answer: 1
},
{
question: "Which country does this flag belong to?",
image: "webp/rs.webp",
options: ["Slovenia", "Bosnia and Herzegovina", "Croatia", "Serbia"],
answer: 3
},
{
question: "Which country does this flag belong to?",
image: "webp/sc.webp",
options: ["Maldives", "Seychelles", "Mauritius", "Comoros"],
answer: 1
},
{
question: "Which country does this flag belong to?",
image: "webp/sl.webp",
options: ["Liberia", "Guinea-Bissau", "Senegal", "Sierra Leone"],
answer: 3
},
{
question: "Which country does this flag belong to?",
image: "webp/sg.webp",
options: ["Brunei", "Singapore", "Malaysia", "Indonesia"],
answer: 1
},
{
question: "Which country does this flag belong to?",
image: "webp/sk.webp",
options: ["Slovakia", "Slovenia", "Serbia", "Croatia"],
answer: 0
},
{
question: "Which country does this flag belong to?",
image: "webp/si.webp",
options: ["Austria", "Hungary", "Slovenia", "Czech Republic"],
answer: 2
},
{
question: "Which country does this flag belong to?",
image: "webp/sb.webp",
options: ["Papua New Guinea", "Solomon Islands", "Vanuatu", "Fiji"],
answer: 1
},
{
question: "Which country does this flag belong to?",
image: "webp/so.webp",
options: ["Ethiopia", "Djibouti", "Somalia", "Sudan"],
answer: 2
},
{
question: "Which country does this flag belong to?",
image: "webp/za.webp",
options: ["South Africa", "Lesotho", "Zimbabwe", "Namibia"],
answer: 0
},
{
question: "Which country does this flag belong to?",
image: "webp/kr.webp",
options: ["South Korea", "China", "North Korea", "Japan"],
answer: 0
},
{
question: "Which country does this flag belong to?",
image: "webp/es.webp",
options: ["Portugal", "Spain", "Italy", "Greece"],
answer: 1
},
{
question: "Which country does this flag belong to?",
image: "webp/lk.webp",
options: ["Maldives", "Sri Lanka", "India", "Bangladesh"],
answer: 1
},
{
question: "Which country does this flag belong to?",
image: "webp/sd.webp",
options: ["Sudan", "Egypt", "Chad", "Eritrea"],
answer: 0
},
{
question: "Which country does this flag belong to?",
image: "webp/sr.webp",
options: ["Suriname", "Guyana", "French Guiana", "Trinidad and Tobago"],
answer: 0
},
{
question: "Which country does this flag belong to?",
image: "webp/sz.webp",
options: ["Lesotho", "Zimbabwe", "Swaziland", "Botswana"],
answer: 2
},
{
question: "Which country does this flag belong to?",
image: "webp/se.webp",
options: ["Sweden", "Norway", "Denmark", "Finland"],
answer: 0
},
{
question: "Which country does this flag belong to?",
image: "webp/ch.webp",
options: ["Liechtenstein", "Switzerland", "Austria", "Germany"],
answer: 1
},
{
question: "Which country does this flag belong to?",
image: "webp/sy.webp",
options: ["Lebanon", "Syria", "Jordan", "Iraq"],
answer: 1
},
{
question: "Which country does this flag belong to?",
image: "webp/tj.webp",
options: ["Kazakhstan", "Kyrgyzstan", "Tajikistan", "Uzbekistan"],
answer: 2
},
{
question: "Which country does this flag belong to?",
image: "webp/tz.webp",
options: ["Burundi", "Kenya", "Uganda", "Tanzania"],
answer: 3
},
{
question: "Which country does this flag belong to?",
image: "webp/th.webp",
options: ["Myanmar", "Vietnam", "Thailand", "Laos"],
answer: 2
},
{
question: "Which country does this flag belong to?",
image: "webp/tg.webp",
options: ["Benin", "Togo", "Burkina Faso", "Ghana"],
answer: 1
},
{
question: "Which country does this flag belong to?",
image: "webp/to.webp",
options: ["Vanuatu", "Tonga", "Samoa", "Fiji"],
answer: 1
},
{
question: "Which country does this flag belong to?",
image: "webp/tt.webp",
options: ["Bahamas", "Trinidad and Tobago", "Jamaica", "Barbados"],
answer: 1
},
{
question: "Which country does this flag belong to?",
image: "webp/tn.webp",
options: ["Algeria", "Morocco", "Tunisia", "Libya"],
answer: 2
},
{
question: "Which country does this flag belong to?",
image: "webp/tr.webp",
options: ["Turkey", "Greece", "Bulgaria", "Cyprus"],
answer: 0
},
{
question: "Which country does this flag belong to?",
image: "webp/tm.webp",
options: ["Turkmenistan", "Kazakhstan", "Uzbekistan", "Kyrgyzstan"],
answer: 0
},
{
question: "Which country does this flag belong to?",
image: "webp/tv.webp",
options: ["Fiji", "Solomon Islands", "Kiribati", "Tuvalu"],
answer: 3
},
{
question: "Which country does this flag belong to?",
image: "webp/ug.webp",
options: ["Ethiopia", "Kenya", "Uganda", "Rwanda"],
answer: 2
},
{
question: "Which country does this flag belong to?",
image: "webp/ua.webp",
options: ["Ukraine", "Belarus", "Russia", "Latvia"],
answer: 0
},
{
question: "Which country does this flag belong to?",
image: "webp/ae.webp",
options: ["Oman", "Kuwait", "United Arab Emirates", "Saudi Arabia"],
answer: 2
},
{
question: "Which country does this flag belong to?",
image: "webp/gb-nir.webp",
options: ["Scotland", "England", "Wales", "Northern Ireland"],
answer: 3
},
{
question: "Which country does this flag belong to?",
image: "webp/us.webp",
options: ["Canada", "United States", "Australia", "New Zealand"],
answer: 1
},
{
question: "Which country does this flag belong to?",
image: "webp/uy.webp",
options: ["Argentina", "Uruguay", "Paraguay", "Chile"],
answer: 1
},
{
question: "Which country does this flag belong to?",
image: "webp/uz.webp",
options: ["Turkmenistan", "Uzbekistan", "Tajikistan", "Kyrgyzstan"],
answer: 1
},
{
question: "Which country does this flag belong to?",
image: "webp/vu.webp",
options: ["Vanuatu", "Solomon Islands", "Fiji", "Tonga"],
answer: 0
},
{
question: "Which country does this flag belong to?",
image: "webp/va.webp",
options: ["San Marino", "Vatican City", "Monaco", "Andorra"],
answer: 1
},
{
question: "Which country does this flag belong to?",
image: "webp/ve.webp",
options: ["Colombia", "Peru", "Ecuador", "Venezuela"],
answer: 3
},
{
question: "Which country does this flag belong to?",
image: "webp/vn.webp",
options: ["Vietnam", "Laos", "Cambodia", "Thailand"],
answer: 0
},
{
question: "Which country does this flag belong to?",
image: "webp/ye.webp",
options: ["Yemen", "Oman", "United Arab Emirates", "Qatar"],
answer: 0
},
{
question: "Which country does this flag belong to?",
image: "webp/zm.webp",
options: ["Namibia", "Zimbabwe", "South Africa", "Zambia"],
answer: 3
},
{
question: "Which country does this flag belong to?",
image: "webp/zw.webp",
options: ["Zimbabwe", "Namibia", "Botswana", "South Africa"],
answer: 0
}


];

var currentQuestion = 0;
var score = 0;

var quizContainer = document.getElementById("quiz-container");
var progressContainer = document.getElementById("progress-container");

function showQuestion() {
  var questionData = quizData[currentQuestion];

  var html = `
    <h2>${questionData.question}</h2>
    <img src="${questionData.image}" alt="Flag">
    <form id="quiz-form">
  `;

  for (var i = 0; i < questionData.options.length; i++) {
    html += `
      <button type="button" onclick="checkAnswer(${i})">${questionData.options[i]}</button>
    `;
  }

  html += `
    </form>
  `;

  quizContainer.innerHTML = html;
  progressContainer.innerHTML = `Correct: ${score} / Questions Asked: ${currentQuestion}`;

  var quizForm = document.getElementById("quiz-form");
  quizForm.addEventListener("submit", function(event) {
    event.preventDefault();
  });
}

function checkAnswer(userAnswer) {
  var questionData = quizData[currentQuestion];

  if (userAnswer === questionData.answer) {
    score++;
  }

  currentQuestion++;

  if (currentQuestion < quizData.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  var html = `
    <h2>Quiz Result</h2>
    <p>You scored ${score} out of ${quizData.length} questions.</p>
    <button onclick="restartQuiz()">Restart Quiz</button>
  `;

  quizContainer.innerHTML = html;
  progressContainer.innerHTML = "";

  currentQuestion = 0;
  score = 0;
}

function restartQuiz() {
  showQuestion();
}

// Randomize the order of quiz questions
quizData.sort(function() {
  return 0.5 - Math.random();
});

// Start the quiz
showQuestion();
