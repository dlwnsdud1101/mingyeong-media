(async(K,DATE,TIME)=>{const w=ms=>new Promise(r=>setTimeout(r,ms));const R='https://raw.githubusercontent.com/dlwnsdud1101/mingyeong-media/main/';
let inp;for(let i=0;i<40&&!(inp=document.querySelector('ytcp-uploads-file-picker input[type=file]'));i++)await w(500);if(!inp)return K+' noinput';
const fill=await (await fetch(R+'fill.json?'+Date.now())).json();const [T,D]=fill[K];
const vb=await (await fetch(R+'v/'+K+'.mp4')).blob();if(vb.size<100000)return K+' badvideo';let dt=new DataTransfer();dt.items.add(new File([vb],K+'.mp4',{type:'video/mp4'}));inp.files=dt.files;inp.dispatchEvent(new Event('change',{bubbles:true}));
let dlg;for(let i=0;i<40;i++){await w(500);dlg=document.querySelector('ytcp-uploads-dialog');if(dlg&&dlg.querySelector('#title-textarea #textbox'))break;}await w(2500);
const lim=document.body.innerText.match(/일일 업로드 한도[^\n]*/);if(lim)return K+' LIMIT';
const set=(el,v)=>{el.focus();document.execCommand('selectAll');document.execCommand('insertText',false,v);if(el.innerText.trim()!==v.trim()){el.innerText=v;el.dispatchEvent(new InputEvent('input',{bubbles:true,inputType:'insertText',data:v}));}el.blur();};
set(dlg.querySelector('#title-textarea #textbox'),T);await w(500);set(dlg.querySelector('#description-textarea #textbox'),D);await w(500);
const nk=dlg.querySelector('tp-yt-paper-radio-button[name="VIDEO_MADE_FOR_KIDS_NOT_MFK"]');nk&&nk.click();
const ti=dlg.querySelector('input[type=file][accept*=image]');let th='noth';if(ti){const b=await (await fetch(R+'t/'+K+'.jpg')).blob();dt=new DataTransfer();dt.items.add(new File([b],K+'.jpg',{type:'image/jpeg'}));ti.files=dt.files;ti.dispatchEvent(new Event('change',{bubbles:true}));th='th'}
await w(3000);
for(let i=0;i<3;i++){dlg.querySelector('#next-button').click();await w(1500);}
const s=dlg.querySelector('ytcp-visibility-scheduler');if(!s||!s.offsetParent){const t=[...dlg.querySelectorAll('*')].find(e=>e.children.length<2&&e.innerText&&e.innerText.trim()==='예약');t&&t.click();await w(1000);}
const sc=dlg.querySelector('ytcp-visibility-scheduler');sc.querySelector('ytcp-text-dropdown-trigger').click();await w(1500);
const di=document.querySelector('ytcp-date-picker input');di.focus();di.value=DATE;di.dispatchEvent(new Event('input',{bubbles:true}));di.dispatchEvent(new KeyboardEvent('keydown',{key:'Enter',keyCode:13,bubbles:true}));await w(1000);
sc.querySelector('input').click();await w(800);const o=[...document.querySelectorAll('[role=option]')].find(o=>o.innerText.trim()===TIME);if(!o)return K+' notime';o.click();await w(800);
const got=sc.querySelector('ytcp-text-dropdown-trigger').innerText.trim()+' '+sc.querySelector('input').value;if(got!==DATE+' '+TIME)return K+' WRONG '+got;
dlg.querySelector('#done-button').click();let t='';for(let i=0;i<30;i++){await w(800);const ok=[...document.querySelectorAll('ytcp-button')].find(b=>b.innerText.trim()==='확인'&&b.offsetParent);if(ok){ok.click();await w(800);}t=[...document.querySelectorAll('ytcp-video-share-dialog, ytcp-uploads-still-processing-dialog')].filter(d=>d.offsetParent).map(d=>d.innerText).join(' ').replace(/\s+/g,' ');if(/예약됨|공개 상태로 설정/.test(t))break;}
const id=(t.match(/shorts\/([\w-]{11})/)||t.match(/youtu\.be\/([\w-]{11})/)||[])[1];return K+" "+th+" "+(t.match(/\d+년 \d+월 \d+일 [\d:]+/)||["??"])[0]})
