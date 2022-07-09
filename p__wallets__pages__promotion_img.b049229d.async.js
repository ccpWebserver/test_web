(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[507],{16993:function(O,i,n){"use strict";n.d(i,{b:function(){return c}});var P=n(57663),d=n(71577),l=n(20310),f=n(67294),g=n(47416),u=n(85893),M,s=(0,g.ZP)(d.Z)(M||(M=(0,l.Z)([`
  //margin-right: 30px;
  //width: 100%;
  font-size: 14px;
  border: 1px solid rgb(68, 223, 132);
  margin-top: 10px;
  color: rgb(255, 255, 255);
  background: linear-gradient(270deg, rgb(137, 209, 67), rgb(117, 219, 141));
  opacity: `,`;
`])),function(m){var o=m.disabled;return o&&.5}),c=function(o){var E=o.text,e=o.block,_=e===void 0?!0:e,t=o.onClick,r=o.disabled,a=r===void 0?!1:r;return(0,u.jsx)(s,{type:"default",shape:"round",disabled:a,onClick:function(){a||t&&t()},size:"large",block:_,children:E})}},84247:function(O,i,n){"use strict";n.r(i);var P=n(20310),d=n(53776),l=n(47416),f=n(16993),g=n(32544),u=n(43581),M=n(67294),s=n(85893),c,m=l.ZP.div(c||(c=(0,P.Z)([`

  img {
    display: block;
    width: 100%;

  }

  @media (max-width: 576px) {
    //transform: rotate(90deg);
    img {
      width: 100%;
      //height: 100vh;
      //transform: rotate(90deg);
      img {
        width: 100%;
        //height: 100vw;
      }
    }

    .bottom {
      max-width: 260px;
      margin: 20px auto 0 auto;
    }
`])));i.default=function(){var o,E=(0,d.t)("@@initialState"),e=E.initialState,_=(0,g.m9)(),t=(0,u.YB)();return(0,s.jsxs)(m,{children:[(0,s.jsx)("img",{src:e==null||(o=e.currentUser)===null||o===void 0?void 0:o.referee_img_url,alt:""}),(0,s.jsx)("div",{className:"bottom",children:(0,s.jsx)(f.b,{text:t.formatMessage({id:"component.nft_car.copy_link"}),disabled:!1,onClick:function(){var a;_((e==null||(a=e.currentUser)===null||a===void 0?void 0:a.reg_url)||"")}})})]})}},32544:function(O,i,n){"use strict";n.d(i,{m9:function(){return c},XP:function(){return m},TW:function(){return o}});var P=n(34792),d=n(55026),l=n(67294),f=n(43581),g=n(29306),u=n.n(g),M=n(61120),s=n.n(M),c=function(){var e=(0,f.YB)();return(0,l.useCallback)(function(_){var t=document.createElement("textarea");t.innerText=_,document.body.appendChild(t),t.select(),document.execCommand("copy"),d.default.success(e.formatMessage({id:"component.nft_car.copy_successfully"})),t.remove()},[])},m=function(){var e=(0,f.YB)();return(0,l.useCallback)(function(_){var t=new XMLHttpRequest;console.log(_),t.open("GET",_,!0),t.responseType="blob",t.onload=function(r){var a=new FileReader;a.onload=function(C){var p=C.target.result,D=document.createElement("a");D.download="\u9080\u8BF7\u7801.png",D.href=p,D.click()};var v=this.response;a.readAsDataURL(v)},t.send(),d.default.success(e.formatMessage({id:"component.nft_car.copy_successfully"}))},[])},o=function(){return(0,l.useCallback)(function(e,_,t){try{s()(e).then(function(r){window.Canvas2Image.saveAsPNG(r,1e3,1e3,_+".png"),t(!0)})}catch(r){t(!1)}},[])}}}]);
