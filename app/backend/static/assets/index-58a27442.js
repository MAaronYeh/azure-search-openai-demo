import{bD as ne,bE as e,bF as Je,bG as ge,bH as Xe,bI as Ye,r as h,bJ as je,bK as Ze,bL as et,bM as tt,bN as st,bO as nt,bP as at,bQ as ot,bR as rt,bS as it,bT as ct,bU as _e,bV as lt}from"./vendor-d92a9189.js";import{D as be,S as _,I as xe,P as ut,T as ee,a as dt,B as ae,b as ht,c as X,d as ve,L as pt,e as mt,f as gt,g as fe,h as _t,i as xt,j as vt,k as ft,l as Ct,C as P,m as yt}from"./fluentui-react-33c3fe38.js";import{e as St,E as jt,f as bt,g as wt,D as Tt,h as Nt}from"./fluentui-icons-e61b4934.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))l(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const p of s.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&l(p)}).observe(document,{childList:!0,subtree:!0});function i(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(r){if(r.ep)return;r.ep=!0;const s=i(r);fetch(r.href,s)}})();async function kt(){const t=await fetch("/auth_setup");if(!t.ok)throw new Error(`auth setup response was not ok: ${t.status}`);return await t.json()}const B=await kt(),L=B.useLogin,Lt=B.msalConfig,At=B.loginRequest,Pt=B.tokenRequest,Rt=t=>t.acquireTokenSilent({...Pt,redirectUri:B.msalConfig.auth.redirectUri}).catch(n=>{console.log(n)});const It="/assets/github-fab00c2d.svg",Et="_layout_1nrkm_1",Mt="_header_1nrkm_7",Bt="_headerContainer_1nrkm_12",Ft="_headerTitleContainer_1nrkm_20",$t="_headerLogo_1nrkm_28",Qt="_headerTitle_1nrkm_20",qt="_headerNavList_1nrkm_37",Ot="_headerNavPageLink_1nrkm_43",Gt="_headerNavPageLinkActive_1nrkm_57",Dt="_headerNavLeftMargin_1nrkm_62",Ht="_headerRightText_1nrkm_66",Ut="_microsoftLogo_1nrkm_71",zt="_githubLogo_1nrkm_76",m={layout:Et,header:Mt,headerContainer:Bt,headerTitleContainer:Ft,headerLogo:$t,headerTitle:Qt,headerNavList:qt,headerNavPageLink:Ot,headerNavPageLinkActive:Gt,headerNavLeftMargin:Dt,headerRightText:Ht,microsoftLogo:Ut,githubLogo:zt},Wt="_loginButton_1y8c5_1",Vt={loginButton:Wt},Kt=()=>{const{instance:t}=ne(),n=t.getActiveAccount(),i=()=>{t.loginPopup({...At,redirectUri:"/redirect"}).catch(s=>console.log(s))},l=()=>{t.logoutPopup({mainWindowRedirectUri:"/",account:t.getActiveAccount()}).catch(s=>console.log(s))},r=`Logout
${n?.username}`;return e.jsx(be,{text:n?r:"Login",className:Vt.loginButton,onClick:n?l:i})},Ce=()=>e.jsxs("div",{className:m.layout,children:[e.jsx("header",{className:m.header,role:"banner",children:e.jsxs("div",{className:m.headerContainer,children:[e.jsx(Je,{to:"/",className:m.headerTitleContainer,children:e.jsx("h3",{className:m.headerTitle,children:"GPT + Enterprise data | Sample"})}),e.jsx("nav",{children:e.jsxs("ul",{className:m.headerNavList,children:[e.jsx("li",{children:e.jsx(ge,{to:"/",className:({isActive:t})=>t?m.headerNavPageLinkActive:m.headerNavPageLink,children:"Chat"})}),e.jsx("li",{className:m.headerNavLeftMargin,children:e.jsx(ge,{to:"/qa",className:({isActive:t})=>t?m.headerNavPageLinkActive:m.headerNavPageLink,children:"Ask a question"})}),e.jsx("li",{className:m.headerNavLeftMargin,children:e.jsx("a",{href:"https://aka.ms/entgptsearch",target:"_blank",title:"Github repository link",children:e.jsx("img",{src:It,alt:"Github logo","aria-label":"Link to github repository",width:"20px",height:"20px",className:m.githubLogo})})})]})}),e.jsx("h4",{className:m.headerRightText,children:"Azure OpenAI + Cognitive Search"}),L&&e.jsx(Kt,{})]})}),e.jsx(Xe,{})]}),Jt="_container_18ti9_1",Xt="_chatRoot_18ti9_8",Yt="_chatContainer_18ti9_13",Zt="_chatEmptyState_18ti9_21",es="_chatEmptyStateTitle_18ti9_31",ts="_chatEmptyStateSubtitle_18ti9_38",ss="_chatMessageStream_18ti9_54",ns="_chatMessageGpt_18ti9_66",as="_chatMessageGptMinWidth_18ti9_73",os="_chatInput_18ti9_78",rs="_chatAnalysisPanel_18ti9_91",is="_chatSettingsSeparator_18ti9_99",cs="_loadingLogo_18ti9_103",ls="_commandsContainer_18ti9_107",us="_commandButton_18ti9_112",u={container:Jt,chatRoot:Xt,chatContainer:Yt,chatEmptyState:Zt,chatEmptyStateTitle:es,chatEmptyStateSubtitle:ts,chatMessageStream:ss,chatMessageGpt:ns,chatMessageGptMinWidth:as,chatInput:os,chatAnalysisPanel:rs,chatSettingsSeparator:is,loadingLogo:cs,commandsContainer:ls,commandButton:us},oe="";function we(t){var n={"Content-Type":"application/json"};return L&&t&&(n.Authorization=`Bearer ${t}`),n}async function ln(t){const n=await fetch(`${oe}/ask`,{method:"POST",headers:we(t.idToken),body:JSON.stringify({question:t.question,approach:t.approach,overrides:{retrieval_mode:t.overrides?.retrievalMode,semantic_ranker:t.overrides?.semanticRanker,semantic_captions:t.overrides?.semanticCaptions,top:t.overrides?.top,temperature:t.overrides?.temperature,prompt_template:t.overrides?.promptTemplate,prompt_template_prefix:t.overrides?.promptTemplatePrefix,prompt_template_suffix:t.overrides?.promptTemplateSuffix,exclude_category:t.overrides?.excludeCategory,use_oid_security_filter:t.overrides?.useOidSecurityFilter,use_groups_security_filter:t.overrides?.useGroupsSecurityFilter}})}),i=await n.json();if(n.status>299||!n.ok)throw Error(i.error||"Unknown error");return i}async function ds(t){const n=t.shouldStream?"chat_stream":"chat";return await fetch(`${oe}/${n}`,{method:"POST",headers:we(t.idToken),body:JSON.stringify({history:t.history,approach:t.approach,overrides:{retrieval_mode:t.overrides?.retrievalMode,semantic_ranker:t.overrides?.semanticRanker,semantic_captions:t.overrides?.semanticCaptions,top:t.overrides?.top,temperature:t.overrides?.temperature,prompt_template:t.overrides?.promptTemplate,prompt_template_prefix:t.overrides?.promptTemplatePrefix,prompt_template_suffix:t.overrides?.promptTemplateSuffix,exclude_category:t.overrides?.excludeCategory,suggest_followup_questions:t.overrides?.suggestFollowupQuestions,use_oid_security_filter:t.overrides?.useOidSecurityFilter,use_groups_security_filter:t.overrides?.useGroupsSecurityFilter}})})}function Te(t){return`${oe}/content/${t}`}var Ne=(t=>(t.RetrieveThenRead="rtr",t.ReadRetrieveRead="rrr",t.ReadDecomposeAsk="rda",t))(Ne||{}),w=(t=>(t.Hybrid="hybrid",t.Vectors="vectors",t.Text="text",t))(w||{});const hs="_answerContainer_9n41r_1",ps="_answerLogo_9n41r_9",ms="_answerText_9n41r_13",gs="_selected_9n41r_32",_s="_citationLearnMore_9n41r_36",xs="_citation_9n41r_36",vs="_followupQuestionsList_9n41r_58",fs="_followupQuestionLearnMore_9n41r_62",Cs="_followupQuestion_9n41r_58",ys="_supContainer_9n41r_81",Ss="_retryButton_9n41r_110",js="_loadingdots_9n41r_132",bs="_loading_9n41r_132",g={answerContainer:hs,answerLogo:ps,answerText:ms,selected:gs,citationLearnMore:_s,citation:xs,followupQuestionsList:vs,followupQuestionLearnMore:fs,followupQuestion:Cs,supContainer:ys,retryButton:Ss,loadingdots:js,loading:bs};function ws(t,n,i){const l=[],r=[];let s=t.replace(/<<([^>>]+)>>/g,(d,x)=>(r.push(x),""));if(s=s.trim(),n){let d=s.length;for(let c=s.length-1;c>=0&&s[c]!=="]";c--)if(s[c]==="["){d=c;break}s=s.substring(0,d)}return{answerHtml:s.split(/\[([^\]]+)\]/g).map((d,x)=>{if(x%2===0)return d;{let c;l.indexOf(d)!==-1?c=l.indexOf(d)+1:(l.push(d),c=l.length);const v=Te(d);return Ye(e.jsx("a",{className:"supContainer",title:d,onClick:()=>i(v),children:e.jsx("sup",{children:c})}))}}).join(""),citations:l,followupQuestions:r}}const ke=()=>e.jsx(St,{primaryFill:"rgba(115, 118, 225, 1)","aria-hidden":"true","aria-label":"Answer logo"}),ye=({answer:t,isSelected:n,isStreaming:i,onCitationClicked:l,onThoughtProcessClicked:r,onSupportingContentClicked:s,onFollowupQuestionClicked:p,showFollowupQuestions:y})=>{const d=h.useMemo(()=>ws(t.answer,i,l),[t]),x=je.sanitize(d.answerHtml);return e.jsxs(_,{className:`${g.answerContainer} ${n&&g.selected}`,verticalAlign:"space-between",children:[e.jsx(_.Item,{children:e.jsxs(_,{horizontal:!0,horizontalAlign:"space-between",children:[e.jsx(ke,{}),e.jsxs("div",{children:[e.jsx(xe,{style:{color:"black"},iconProps:{iconName:"Lightbulb"},title:"Show thought process",ariaLabel:"Show thought process",onClick:()=>r(),disabled:!t.thoughts}),e.jsx(xe,{style:{color:"black"},iconProps:{iconName:"ClipboardList"},title:"Show supporting content",ariaLabel:"Show supporting content",onClick:()=>s(),disabled:!t.data_points?.length})]})]})}),e.jsx(_.Item,{grow:!0,children:e.jsx("div",{className:g.answerText,dangerouslySetInnerHTML:{__html:x}})}),!!d.citations.length&&e.jsx(_.Item,{children:e.jsxs(_,{horizontal:!0,wrap:!0,tokens:{childrenGap:5},children:[e.jsx("span",{className:g.citationLearnMore,children:"Citations:"}),d.citations.map((c,v)=>{const F=Te(c);return e.jsx("a",{className:g.citation,title:c,onClick:()=>l(F),children:`${++v}. ${c}`},v)})]})}),!!d.followupQuestions.length&&y&&p&&e.jsx(_.Item,{children:e.jsxs(_,{horizontal:!0,wrap:!0,className:`${d.citations.length?g.followupQuestionsList:""}`,tokens:{childrenGap:6},children:[e.jsx("span",{className:g.followupQuestionLearnMore,children:"Follow-up questions:"}),d.followupQuestions.map((c,v)=>e.jsx("a",{className:g.followupQuestion,title:c,onClick:()=>p(c),children:`${c}`},v))]})})]})},Ts=()=>{const t=Ze({from:{opacity:0},to:{opacity:1}});return e.jsx(et.div,{style:{...t},children:e.jsxs(_,{className:g.answerContainer,verticalAlign:"space-between",children:[e.jsx(ke,{}),e.jsx(_.Item,{grow:!0,children:e.jsxs("p",{className:g.answerText,children:["Generating answer",e.jsx("span",{className:g.loadingdots})]})})]})})},Ns=({error:t,onRetry:n})=>e.jsxs(_,{className:g.answerContainer,verticalAlign:"space-between",children:[e.jsx(jt,{"aria-hidden":"true","aria-label":"Error icon",primaryFill:"red"}),e.jsx(_.Item,{grow:!0,children:e.jsx("p",{className:g.answerText,children:t})}),e.jsx(ut,{className:g.retryButton,onClick:n,text:"Retry"})]}),ks="_questionInputContainer_1e00p_1",Ls="_questionInputTextArea_1e00p_10",As="_questionInputButtonsContainer_1e00p_15",Y={questionInputContainer:ks,questionInputTextArea:Ls,questionInputButtonsContainer:As},Ps=({onSend:t,disabled:n,placeholder:i,clearOnSend:l})=>{const[r,s]=h.useState(""),p=()=>{n||!r.trim()||(t(r),l&&s(""))},y=c=>{c.key==="Enter"&&!c.shiftKey&&(c.preventDefault(),p())},d=(c,v)=>{v?v.length<=1e3&&s(v):s("")},x=n||!r.trim();return e.jsxs(_,{horizontal:!0,className:Y.questionInputContainer,children:[e.jsx(ee,{className:Y.questionInputTextArea,placeholder:i,multiline:!0,resizable:!1,borderless:!0,value:r,onChange:d,onKeyDown:y}),e.jsx("div",{className:Y.questionInputButtonsContainer,children:e.jsx(dt,{content:"Ask question button",relationship:"label",children:e.jsx(ae,{size:"large",icon:e.jsx(bt,{primaryFill:"rgba(115, 118, 225, 1)"}),disabled:x,onClick:p})})})]})},Rs="_examplesNavList_1eu46_1",Is="_example_1eu46_1",Es="_exampleText_1eu46_27",te={examplesNavList:Rs,example:Is,exampleText:Es},Ms=({text:t,value:n,onClick:i})=>e.jsx("div",{className:te.example,onClick:()=>i(n),children:e.jsx("p",{className:te.exampleText,children:t})}),Bs=[{text:"What is included in my Northwind Health Plus plan that is not in standard?",value:"What is included in my Northwind Health Plus plan that is not in standard?"},{text:"What happens in a performance review?",value:"What happens in a performance review?"},{text:"What does a Product Manager do?",value:"What does a Product Manager do?"}],Fs=({onExampleClicked:t})=>e.jsx("ul",{className:te.examplesNavList,children:Bs.map((n,i)=>e.jsx("li",{children:e.jsx(Ms,{text:n.text,value:n.value,onClick:t})},i))}),$s="_container_1rakl_1",Qs="_message_1rakl_9",Se={container:$s,message:Qs},H=({message:t})=>e.jsx("div",{className:Se.container,children:e.jsx("div",{className:Se.message,children:t})}),qs="_thoughtProcess_1rdxk_1",Os={thoughtProcess:qs};function Gs(t){const n=t.split(": "),i=n[0],l=n.slice(1).join(": ");return{title:i,content:l}}const Ds="_supportingContentNavList_1yfye_1",Hs="_supportingContentItem_1yfye_9",Us="_supportingContentItemHeader_1yfye_21",zs="_supportingContentItemText_1yfye_25",U={supportingContentNavList:Ds,supportingContentItem:Hs,supportingContentItemHeader:Us,supportingContentItemText:zs},Ws=({supportingContent:t})=>e.jsx("ul",{className:U.supportingContentNavList,children:t.map((n,i)=>{const l=Gs(n);return e.jsxs("li",{className:U.supportingContentItem,children:[e.jsx("h4",{className:U.supportingContentItemHeader,children:l.title}),e.jsx("p",{className:U.supportingContentItemText,children:l.content})]})})});var S=(t=>(t.ThoughtProcessTab="thoughtProcess",t.SupportingContentTab="supportingContent",t.CitationTab="citation",t))(S||{});const Z={disabled:!0,style:{color:"grey"}},Vs=({answer:t,activeTab:n,activeCitation:i,citationHeight:l,className:r,onActiveTabChanged:s})=>{const p=!t.thoughts,y=!t.data_points.length,d=!i,x=je.sanitize(t.thoughts);return e.jsxs(ht,{className:r,selectedKey:n,onLinkClick:c=>c&&s(c.props.itemKey),children:[e.jsx(X,{itemKey:S.ThoughtProcessTab,headerText:"Thought process",headerButtonProps:p?Z:void 0,children:e.jsx("div",{className:Os.thoughtProcess,dangerouslySetInnerHTML:{__html:x}})}),e.jsx(X,{itemKey:S.SupportingContentTab,headerText:"Supporting content",headerButtonProps:y?Z:void 0,children:e.jsx(Ws,{supportingContent:t.data_points})}),e.jsx(X,{itemKey:S.CitationTab,headerText:"Citation",headerButtonProps:d?Z:void 0,children:e.jsx("iframe",{title:"Citation",src:i,width:"100%",height:l})})]})},Ks="_container_cfwv2_1",Js={container:Ks},Xs=({className:t,onClick:n})=>e.jsx("div",{className:`${Js.container} ${t??""}`,children:e.jsx(ae,{icon:e.jsx(wt,{}),onClick:n,children:"Developer settings"})}),Ys="_container_cfwv2_1",Zs={container:Ys},en=({className:t,disabled:n,onClick:i})=>e.jsx("div",{className:`${Zs.container} ${t??""}`,children:e.jsx(ae,{icon:e.jsx(Tt,{}),disabled:n,onClick:i,children:"Clear chat"})}),tn=()=>{const{instance:t}=ne(),n=t.getActiveAccount(),i=s=>typeof s=="string"?s:JSON.stringify(s),l=n?.idTokenClaims?Object.keys(n.idTokenClaims).map(s=>({name:s,value:i((n.idTokenClaims??{})[s])})):[],r=[ve({columnId:"name",compare:(s,p)=>s.name.localeCompare(p.name),renderHeaderCell:()=>"Name",renderCell:s=>s.name}),ve({columnId:"value",compare:(s,p)=>s.value.localeCompare(p.value),renderHeaderCell:()=>"Value",renderCell:s=>s.value})];return e.jsxs("div",{children:[e.jsx(pt,{children:"ID Token Claims"}),e.jsxs(mt,{items:l,columns:r,sortable:!0,getRowId:s=>s.name,children:[e.jsx(gt,{children:e.jsx(fe,{children:({renderHeaderCell:s})=>e.jsx(_t,{children:s()})})}),e.jsx(xt,{children:({item:s,rowId:p})=>e.jsx(fe,{children:({renderCell:y})=>e.jsx(vt,{children:y(s)})},p)})]})]})},sn=()=>{const[t,n]=h.useState(!1),[i,l]=h.useState(""),[r,s]=h.useState(3),[p,y]=h.useState(w.Hybrid),[d,x]=h.useState(!0),[c,v]=h.useState(!0),[F,Le]=h.useState(!1),[re,Ae]=h.useState(""),[$,Pe]=h.useState(!1),[ie,Re]=h.useState(!1),[ce,Ie]=h.useState(!1),T=h.useRef(""),z=h.useRef(null),[Q,q]=h.useState(!1),[le,W]=h.useState(!1),[O,V]=h.useState(),[ue,K]=h.useState(),[R,A]=h.useState(void 0),[I,de]=h.useState(0),[j,G]=h.useState([]),[he,pe]=h.useState([]),Ee=async(o,a,f,J)=>{let b="",C={};const We=N=>new Promise(Ve=>{setTimeout(()=>{b+=N;const Ke={...C,answer:b};pe([...a,[o,Ke]]),Ve(null)},33)});try{W(!0);for await(const N of tt(J))N.data_points?C=N:N.choices&&N.choices[0].delta.content&&(q(!1),await We(N.choices[0].delta.content))}finally{W(!1)}return{...C,answer:b}},D=L?ne().instance:void 0,E=async o=>{T.current=o,O&&V(void 0),q(!0),K(void 0),A(void 0);const a=D?await Rt(D):void 0;try{const J={history:[...j.map(C=>({user:C[0],bot:C[1].answer})),{user:o,bot:void 0}],approach:Ne.ReadRetrieveRead,shouldStream:c,overrides:{promptTemplate:i.length===0?void 0:i,excludeCategory:re.length===0?void 0:re,top:r,retrievalMode:p,semanticRanker:d,semanticCaptions:F,suggestFollowupQuestions:$,useOidSecurityFilter:ie,useGroupsSecurityFilter:ce},idToken:a?.accessToken},b=await ds(J);if(!b.body)throw Error("No response body");if(c){const C=await Ee(o,j,G,b.body);G([...j,[o,C]])}else{const C=await b.json();if(b.status>299||!b.ok)throw Error(C.error||"Unknown error");G([...j,[o,C]])}}catch(f){V(f)}finally{q(!1)}},Me=()=>{T.current="",O&&V(void 0),K(void 0),A(void 0),G([]),pe([]),q(!1),W(!1)};h.useEffect(()=>z.current?.scrollIntoView({behavior:"smooth"}),[Q]),h.useEffect(()=>z.current?.scrollIntoView({behavior:"auto"}),[he]);const Be=(o,a)=>{l(a||"")},Fe=(o,a)=>{s(parseInt(a||"3"))},$e=(o,a,f)=>{y(a?.data||w.Hybrid)},Qe=(o,a)=>{x(!!a)},qe=(o,a)=>{Le(!!a)},Oe=(o,a)=>{v(!!a)},Ge=(o,a)=>{Ae(a||"")},De=(o,a)=>{Pe(!!a)},He=(o,a)=>{Re(!!a)},Ue=(o,a)=>{Ie(!!a)},ze=o=>{E(o)},me=(o,a)=>{ue===o&&R===S.CitationTab&&I===a?A(void 0):(K(o),A(S.CitationTab)),de(a)},M=(o,a)=>{A(R===o&&I===a?void 0:o),de(a)};return e.jsxs("div",{className:u.container,children:[e.jsxs("div",{className:u.commandsContainer,children:[e.jsx(en,{className:u.commandButton,onClick:Me,disabled:!T.current||Q}),e.jsx(Xs,{className:u.commandButton,onClick:()=>n(!t)})]}),e.jsxs("div",{className:u.chatRoot,children:[e.jsxs("div",{className:u.chatContainer,children:[T.current?e.jsxs("div",{className:u.chatMessageStream,children:[le&&he.map((o,a)=>e.jsxs("div",{children:[e.jsx(H,{message:o[0]}),e.jsx("div",{className:u.chatMessageGpt,children:e.jsx(ye,{isStreaming:!0,answer:o[1],isSelected:!1,onCitationClicked:f=>me(f,a),onThoughtProcessClicked:()=>M(S.ThoughtProcessTab,a),onSupportingContentClicked:()=>M(S.SupportingContentTab,a),onFollowupQuestionClicked:f=>E(f),showFollowupQuestions:$&&j.length-1===a},a)})]},a)),!le&&j.map((o,a)=>e.jsxs("div",{children:[e.jsx(H,{message:o[0]}),e.jsx("div",{className:u.chatMessageGpt,children:e.jsx(ye,{isStreaming:!1,answer:o[1],isSelected:I===a&&R!==void 0,onCitationClicked:f=>me(f,a),onThoughtProcessClicked:()=>M(S.ThoughtProcessTab,a),onSupportingContentClicked:()=>M(S.SupportingContentTab,a),onFollowupQuestionClicked:f=>E(f),showFollowupQuestions:$&&j.length-1===a},a)})]},a)),Q&&e.jsxs(e.Fragment,{children:[e.jsx(H,{message:T.current}),e.jsx("div",{className:u.chatMessageGptMinWidth,children:e.jsx(Ts,{})})]}),O?e.jsxs(e.Fragment,{children:[e.jsx(H,{message:T.current}),e.jsx("div",{className:u.chatMessageGptMinWidth,children:e.jsx(Ns,{error:O.toString(),onRetry:()=>E(T.current)})})]}):null,e.jsx("div",{ref:z})]}):e.jsxs("div",{className:u.chatEmptyState,children:[e.jsx(Nt,{fontSize:"120px",primaryFill:"rgba(115, 118, 225, 1)","aria-hidden":"true","aria-label":"Chat logo"}),e.jsx("h1",{className:u.chatEmptyStateTitle,children:"Chat with your data"}),e.jsx("h2",{className:u.chatEmptyStateSubtitle,children:"Ask anything or try an example"}),e.jsx(Fs,{onExampleClicked:ze})]}),e.jsx("div",{className:u.chatInput,children:e.jsx(Ps,{clearOnSend:!0,placeholder:"Type a new question (e.g. does my plan cover annual eye exams?)",disabled:Q,onSend:o=>E(o)})})]}),j.length>0&&R&&e.jsx(Vs,{className:u.chatAnalysisPanel,activeCitation:ue,onActiveTabChanged:o=>M(o,I),citationHeight:"810px",answer:j[I][1],activeTab:R}),e.jsxs(ft,{headerText:"Configure answer generation",isOpen:t,isBlocking:!1,onDismiss:()=>n(!1),closeButtonAriaLabel:"Close",onRenderFooterContent:()=>e.jsx(be,{onClick:()=>n(!1),children:"Close"}),isFooterAtBottom:!0,children:[e.jsx(ee,{className:u.chatSettingsSeparator,defaultValue:i,label:"Override prompt template",multiline:!0,autoAdjustHeight:!0,onChange:Be}),e.jsx(Ct,{className:u.chatSettingsSeparator,label:"Retrieve this many search results:",min:1,max:50,defaultValue:r.toString(),onChange:Fe}),e.jsx(ee,{className:u.chatSettingsSeparator,label:"Exclude category",onChange:Ge}),e.jsx(P,{className:u.chatSettingsSeparator,checked:d,label:"Use semantic ranker for retrieval",onChange:Qe}),e.jsx(P,{className:u.chatSettingsSeparator,checked:F,label:"Use query-contextual summaries instead of whole documents",onChange:qe,disabled:!d}),e.jsx(P,{className:u.chatSettingsSeparator,checked:$,label:"Suggest follow-up questions",onChange:De}),L&&e.jsx(P,{className:u.chatSettingsSeparator,checked:ie,label:"Use oid security filter",disabled:!D?.getActiveAccount(),onChange:He}),L&&e.jsx(P,{className:u.chatSettingsSeparator,checked:ce,label:"Use groups security filter",disabled:!D?.getActiveAccount(),onChange:Ue}),e.jsx(yt,{className:u.chatSettingsSeparator,label:"Retrieval mode",options:[{key:"hybrid",text:"Vectors + Text (Hybrid)",selected:p==w.Hybrid,data:w.Hybrid},{key:"vectors",text:"Vectors",selected:p==w.Vectors,data:w.Vectors},{key:"text",text:"Text",selected:p==w.Text,data:w.Text}],required:!0,onChange:$e}),e.jsx(P,{className:u.chatSettingsSeparator,checked:c,label:"Stream chat completion responses",onChange:Oe}),L&&e.jsx(tn,{})]})]})]})};var se;if(L){var k=new st(Lt);!k.getActiveAccount()&&k.getAllAccounts().length>0&&k.setActiveAccount(k.getActiveAccount()),k.addEventCallback(t=>{if(t.eventType===nt.LOGIN_SUCCESS&&t.payload){const n=t.payload;k.setActiveAccount(n)}}),se=e.jsx(lt,{instance:k,children:e.jsx(Ce,{})})}else se=e.jsx(Ce,{});at();const nn=ot([{path:"/",element:se,children:[{index:!0,element:e.jsx(sn,{})},{path:"qa",lazy:()=>_e(()=>import("./OneShot-0cac35fa.js"),["assets/OneShot-0cac35fa.js","assets/vendor-d92a9189.js","assets/fluentui-react-33c3fe38.js","assets/fluentui-icons-e61b4934.js","assets/OneShot-daa12333.css"])},{path:"*",lazy:()=>_e(()=>import("./NoPage-a19a8c29.js"),["assets/NoPage-a19a8c29.js","assets/vendor-d92a9189.js"])}]}]);rt.createRoot(document.getElementById("root")).render(e.jsx(it.StrictMode,{children:e.jsx(ct,{router:nn})}));export{Ne as A,Fs as E,Ps as Q,w as R,Xs as S,tn as T,ye as a,S as b,Ns as c,Vs as d,ln as e,Rt as g,L as u};
//# sourceMappingURL=index-58a27442.js.map
