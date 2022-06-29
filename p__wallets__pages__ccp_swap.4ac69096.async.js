(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[248],{16993:function(h,f,t){"use strict";t.d(f,{b:function(){return S}});var E=t(57663),p=t(71577),j=t(20310),c=t(67294),r=t(47416),v=t(85893),a,l=(0,r.ZP)(p.Z)(a||(a=(0,j.Z)([`
  //margin-right: 30px;
  //width: 100%;
  font-size: 14px;
  border: 1px solid rgb(68, 223, 132);
  margin-top: 10px;
  color: rgb(255, 255, 255);
  background: linear-gradient(270deg, rgb(137, 209, 67), rgb(117, 219, 141));
  opacity: `,`;
`])),function(y){var d=y.disabled;return d&&.5}),S=function(d){var F=d.text,C=d.block,N=C===void 0?!0:C,I=d.onClick,_=d.disabled,s=_===void 0?!1:_;return(0,v.jsx)(l,{type:"default",shape:"round",disabled:s,onClick:function(){s||I&&I()},size:"large",block:N,children:F})}},87681:function(h,f,t){"use strict";t.r(f),t.d(f,{default:function(){return Cn}});var E=t(20310),p=t(20228),j=t(11382),c=t(34792),r=t(55026),v=t(2824),a=t(8870),l=t(3182),S=t(94043),y=t.n(S),d=t(47416),F=t(16993),C=t(59250),N=t(13013),I=t(30887),_=t(14289),s=t(67294),M=t(53776),Q=t(46677),U=t.n(Q),B=t(68314),R=t.n(B),q=t(51970),o=t.n(q),nn={chain:"CCP",name:"ccp_coin",img:U(),amount_key:"ccp_dog_coin",color:"red",coin_type:"0",resAge:"ccp",exchangeKay:"CCP_USDT"},pn={chain:"GUT",name:"usdt_coin",color:"red",amount_key:"gut_coin",coin_type:"3",img:o(),resAge:"gut",exchangeKay:"GUT_CCP"},xn={chain:"GUT Power",name:"usdt_coin",color:"red",amount_key:"",coin_type:"4",img:o(),resAge:"gut_power",exchangeKay:"Power_CCP"},mn={chain:"USDT",name:"usdt_coin",color:"rgba(4, 131, 224, 1)",amount_key:"usdt_coin",coin_type:"1",img:R(),resAge:"usdt"},n=t(85893),tn,en,K=[(0,a.Z)((0,a.Z)({},mn),{},{children:[nn]}),(0,a.Z)((0,a.Z)({},nn),{},{children:[pn,xn]})],an=function(O){var T=O.onCb,W=O.children,i=O.list,G=(0,s.useState)(0),L=(0,v.Z)(G,2),H=L[0],k=L[1],b=(0,M.t)("@@initialState"),Z=b.initialState;return(0,n.jsx)(fn,{overlay:(0,n.jsx)(hn,{children:i.map(function(P,z){var u;return(0,n.jsx)(_.Z.Item,{className:z==H?"ac":"",onClick:function(){k(z),T(P)},children:(0,n.jsxs)("div",{className:"top",children:[(0,n.jsx)("p",{children:P.chain}),(0,n.jsx)("h3",{style:{color:P.color||"rgba(4, 131, 224, 1)"},children:(Z==null||(u=Z.currentUser)===null||u===void 0?void 0:u[P.amount_key])||0})]})},P.chain)})}),placement:"bottomCenter",arrow:!0,destroyPopupOnHide:!0,disabled:i.length===1,trigger:["click"],children:W})},hn=(0,d.ZP)(_.Z)(tn||(tn=(0,E.Z)([`
  border-radius: 10px;

  p {
    margin-bottom: 0;
  }

  li {
    &:hover {

    }
  }

  .ac {
    .top {
      p {
        color: #44df84;
      }
    }
  }

  .top {
    display: flex;
    font-size: 15px;
    font-weight: 400;
    padding: 10px;
    box-sizing: border-box;
    color: #333333;
    line-height: 20px;
    background-color: rgba(246, 248, 250, 1);
    justify-content: space-between;

    span {

    }

    h3 {
      margin-bottom: 0;
      color: rgba(4, 131, 224, 1);
      font-size: 13px;
      display: flex;
      align-items: center;

      img {
        display: block;
        width: 20px;
      }
    }
  }
`]))),fn=(0,d.ZP)(N.Z)(en||(en=(0,E.Z)([`
  color: #505f79;
  font-size: 12px;


  > span {
    font-size: 12px;
    transition: all 200ms;
  }

  &.ac {
    span {
      transform: rotate(180deg);
    }
  }
`]))),sn=t(67329),on=t(93874),A=t(28219),vn=t(1171),An=t.n(vn),bn=t(59749),rn,ln,En=function(){var O,T,W=(0,M.t)("@@initialState"),i=W.initialState,G=W.setInitialState,L=function(){var x=(0,l.Z)(y().mark(function e(){var m,g;return y().wrap(function(w){for(;;)switch(w.prev=w.next){case 0:return w.next=2,i==null||(m=i.fetchUserInfo)===null||m===void 0?void 0:m.call(i);case 2:if(g=w.sent,!g){w.next=6;break}return w.next=6,G(function(Nn){return(0,a.Z)((0,a.Z)({},Nn),{},{currentUser:g})});case 6:case"end":return w.stop()}},e)}));return function(){return x.apply(this,arguments)}}(),H=(0,s.useState)(K[0]),k=(0,v.Z)(H,2),b=k[0],Z=k[1],P=(0,s.useState)(K[0].children[0]),z=(0,v.Z)(P,2),u=z[0],Y=z[1],On=(0,s.useState)(),dn=(0,v.Z)(On,2),D=dn[0],V=dn[1],cn=(0,sn.f)(on.w.ccp_exchange_rate),Pn=cn.request,$=cn.data,wn=(0,s.useState)(!1),un=(0,v.Z)(wn,2),In=un[0],X=un[1],Dn=(0,A.YB)(),gn=(0,s.useMemo)(function(){var x;if(!$||!u.exchangeKay)return 1;var e=$.data,m={};return e.forEach(function(g){m=(0,a.Z)((0,a.Z)({},m),g)}),1/((x=m[u.exchangeKay])===null||x===void 0?void 0:x.price)},[$,u]),J=(0,sn.f)(on.w.ccp_dog_convert),Sn=J.request,Mn=J.status,Un=J.data,Fn=(0,s.useCallback)((0,l.Z)(y().mark(function x(){var e;return y().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return X(!0),g.next=3,Sn(D,b.resAge,u.resAge);case 3:if(e=g.sent,console.log(e),!e.err){g.next=9;break}return r.default.error(e.err),X(!1),g.abrupt("return");case 9:X(!1),r.default.success(e.info),V("");case 12:case"end":return g.stop()}},x)})),[D,u,b]);return(0,s.useEffect)(function(){Pn("")},[]),(0,n.jsxs)(jn,{children:[(0,n.jsx)("h3",{className:"tis",children:(0,n.jsx)(A._H,{id:"pages.myaccount.usdt_sunder"})}),(0,n.jsxs)("div",{className:"box",children:[(0,n.jsxs)("div",{className:"box_top",children:[(0,n.jsxs)("div",{className:"show_box",children:[(0,n.jsx)(an,{list:K,onCb:function(e){Z(e),Y(e.children[0])},children:(0,n.jsxs)("div",{className:"top",children:[(0,n.jsx)("p",{children:(0,n.jsx)(A._H,{id:"pages.myaccount.ccpswapnumbder"})}),(0,n.jsxs)("p",{children:[(0,n.jsx)(A._H,{id:"pages.myaccount.available"}),"\uFF1A",i==null||(O=i.currentUser)===null||O===void 0?void 0:O[b.amount_key],(0,n.jsx)("img",{src:b.img,alt:""})]})]})}),(0,n.jsxs)("div",{className:"bottom",children:[(0,n.jsx)("input",{value:D,onInput:function(e){var m;return V((m=e.target)===null||m===void 0?void 0:m.value)},type:"text"}),(0,n.jsxs)("p",{children:[(0,n.jsx)("span",{onClick:function(){var e;V((i==null||(e=i.currentUser)===null||e===void 0?void 0:e[b.amount_key])||"")},children:"Max"})," ",b.chain]})]})]}),(0,n.jsx)("div",{className:"arrow",children:(0,n.jsx)("img",{src:"https://sunswap.com/static/media/down-arrow.b31e68b4.svg",alt:""})}),(0,n.jsxs)("div",{className:"show_box",children:[(0,n.jsx)(an,{list:b.children,onCb:function(e){Y(e)},children:(0,n.jsxs)("div",{className:"top",children:[(0,n.jsx)("p",{children:(0,n.jsx)(A._H,{id:"pages.myaccount.get_quantity"})}),(0,n.jsxs)("p",{children:[(0,n.jsx)(A._H,{id:"pages.myaccount.balance"}),"\uFF1A",(i==null||(T=i.currentUser)===null||T===void 0?void 0:T[u.amount_key])||0,(0,n.jsx)("img",{src:u.img,alt:""})]})]})}),(0,n.jsxs)("div",{className:"bottom",children:[(0,n.jsx)("input",{disabled:!0,value:((D||0)*gn).toFixed(2),type:"text"}),(0,n.jsx)("p",{children:u.chain})]})]}),(0,n.jsx)("div",{style:{height:"20px"}}),In?(0,n.jsx)(j.Z,{}):(0,n.jsx)(F.b,{disabled:D<=0||!D,onClick:function(){return Fn()},text:Dn.formatMessage({id:"pages.myaccount.redeem_now"})})]}),(0,n.jsxs)("div",{className:"box_bottom",children:[(0,n.jsx)("div",{className:"dash-line"}),(0,n.jsx)("div",{className:"half-circle c-right"}),(0,n.jsx)("div",{className:"half-circle c-left"}),(0,n.jsxs)("ul",{children:[(0,n.jsxs)("li",{children:[(0,n.jsx)(A._H,{id:"pages.myaccount.what_is_ccp"}),"\uFF1F"]}),(0,n.jsxs)("div",{children:["1 ",b.chain," = ",(0,bn.Z)(gn)," ",u.chain]}),(0,n.jsx)("li",{children:(0,n.jsx)(A._H,{id:"pages.myaccount.what_can_i_do"})}),(0,n.jsx)("div",{children:(0,n.jsx)(A._H,{id:"pages.myaccount.the_exchanged"})})]})]})]})]})},yn=d.ZP.div(rn||(rn=(0,E.Z)([`
  padding: 70px 40px;
  background: url(`,`) no-repeat;
  background-size: 100% 100%;
  color: #fff;
  border-top-left-radius: 80px;
  border-bottom-left-radius: 80px;
  position: relative;
  overflow: hidden;
  text-align: center;

  .left-coin {
    position: absolute;
    width: 25%;
    left: 1%;
    top: 30px;
  }

  .right-coin {
    position: absolute;
    right: -6%;
    top: 30px;
    width: 30%;
  }

  .title_box {
    position: relative;
    margin-bottom: 10px;

    .title {
      position: absolute;
      top: -2px;
      left: 0;
      right: 0;
      margin: auto auto auto -2px;
      background: none;
      font-style: normal;
      font-weight: 600;
      font-size: 4rem;
      line-height: 82px;
      text-align: center;
      color: white;

    }

    .title2 {
      font-style: normal;
      font-weight: 600;
      font-size: 4rem;
      line-height: 82px;
      text-align: center;
      z-index: 10;
      background: linear-gradient(90deg, #1e09a3 .94%, #08bac6 48.8%, #f86817 98.95%);
      -webkit-background-clip: text;
      margin-bottom: 10px;
      color: transparent;
      vertical-align: baseline;
    }
  }

  .sub_title {
    font-family: PingFang SC;
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 22px;
    color: hsla(0, 0%, 100%, .8);
  }

  @media (max-width: 576px) {
    padding: 50px 20px;
    .title_box {
      .title, .title2 {
        font-size: 28px;
        line-height: 52px;
      }
    }
  }
`])),An()),jn=d.ZP.div(ln||(ln=(0,E.Z)([`
  .tis {
    font-family: PingFang SC;
    font-style: normal;
    font-size: 1.5rem;
    line-height: 34px;
    text-align: center;
    margin-top: 40px;
    color: white;
  }

  .box {
    width: 504px;
    margin: 10px auto;
    padding: 40px;
    background: #fff;
    color: #111;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 30px;
    overflow: hidden;

    .box_top {
      .show_box {
        box-shadow: 0 10px 40px rgb(21 55 156 / 6%);
        border-radius: 20px;
        padding: 18px;

        .top {
          display: flex;
          justify-content: space-between;
          align-items: center;

          p {
            display: flex;
            font-size: 14px;
            color: #111;
            margin-bottom: 0;

            img {
              display: block;
              width: 20px;
              height: 20px;
              margin-left: 10px;
            }
          }
        }

        .bottom {
          display: flex;
          justify-content: space-between;
          margin-top: 10px;

          input {
            background: transparent;
            font-family: PingFang SC;
            flex: 1;
            font-style: normal;
            font-size: 20px;
            line-height: 28px;
            color: #333;
            border: none;
            box-shadow: none;
            padding: 0;
            outline: none;
            touch-action: manipulation;
          }

          p {
            margin-left: 5px;
            font-family: Avenir Next;
            font-style: normal;
            font-weight: 500;
            font-size: 1.3rem;
            color: #333;
            padding-top: 2px;
            margin-bottom: 0;
            display: flex;
            align-items: center;

            span {
              cursor: pointer;
              background: #ff8e18;
              border-radius: 9px;
              color: #fff;
              padding: 2px 10px;
              font-size: 12px;
              margin-right: 10px;
            }
          }
        }
      }

      .arrow {
        text-align: center;
        margin: 20px 0;

        img {
          margin: 0 auto;
          display: block;
        }
      }

      .bottom_tis {
        margin-top: 10px;
        color: #666;
        font-size: 12px;
        text-align: start;
        display: block;
      }
    }

    .box_bottom {
      position: relative;
      margin-top: 30px;

      .dash-line {
        border-top: 1px dashed rgba(55, 111, 228, .4);
        position: absolute;
        top: 0;
        left: -45px;
        width: 506px;
        height: 1px;
      }

      .half-circle {
        position: absolute;
        top: -10px;
        width: 20px;
        height: 20px;
        border-radius: 20px;
        background: #3771e5;

        &.c-right {
          right: -50px;
          background: #3975ea;
        }

        &.c-left {
          left: -50px;
          background: #3975ea;
        }
      }

      ul {
        margin-top: 20px;
        list-style: disc;
        text-align: start;

        li::marker {
          unicode-bidi: isolate;
          font-variant-numeric: tabular-nums;
          text-transform: none;
          text-indent: 0px !important;
          text-align: start !important;
          text-align-last: start !important;
          color: #5915e1;
        }

        li {

          list-style: disc;
          margin-left: -10px;
          font-weight: 500;
          font-size: 1.1rem;
          padding-top: 30px;

        }

        div {
          margin-top: 5px;
          font-style: normal;
          font-weight: 400;
          font-size: 14px;
          line-height: 20px;
          color: #999;
        }
      }
    }
  }

  @media (max-width: 576px) {
    .box {
      width: 350px;
      padding: 10px;

      .box_top .show_box .bottom {
        input {
          width: 150px;
        }
      }

      .box_bottom {
        padding: 0 10px;

        ul {
          li {
            font-size: 18px;
            padding-top: 20px;
          }
        }
      }
    }

    .tis {
      margin-top: 0;
    }

  }
`]))),Cn=function(){return(0,n.jsxs)(yn,{children:[(0,n.jsxs)("div",{className:"title_box",children:[(0,n.jsx)("h3",{className:"title",children:(0,n.jsx)(A._H,{id:"pages.myaccount.ccpswap"})}),(0,n.jsx)("h3",{className:"title2",children:(0,n.jsx)(A._H,{id:"pages.myaccount.ccpswap"})})]}),(0,n.jsx)(En,{})]})}},59749:function(h,f,t){"use strict";t.d(f,{Z:function(){return E}});function E(p){if(!p)return"0.00";p=p.toFixed(2).split(".");for(var j=p[0].split("").reverse(),c=[],r=0,v=j.length;r<v;r++)r%3==0&&r!==0&&c.push(","),c.push(j[r]);return c.reverse(),p[1]?c=c.join("").concat("."+p[1]):c=c.join(""),c}},67329:function(h,f,t){"use strict";t.d(f,{f:function(){return v},o:function(){return a}});var E=t(3182),p=t(2824),j=t(94043),c=t.n(j),r=t(67294),v=function(S){var y=(0,r.useState)(a.start),d=(0,p.Z)(y,2),F=d[0],C=d[1],N=(0,r.useState)(),I=(0,p.Z)(N,2),_=I[0],s=I[1],M=(0,r.useCallback)((0,E.Z)(c().mark(function Q(){var U,B,R=arguments;return c().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.prev=0,C(a.wait),o.next=4,S.apply(void 0,R);case 4:return U=o.sent,s(U),C(a.success),o.abrupt("return",U);case 10:return o.prev=10,o.t0=o.catch(0),B={err:o.t0.info},s(B),C(a.failure),o.abrupt("return",B);case 16:case"end":return o.stop()}},Q,null,[[0,10]])})),[C,s]);return{status:F,request:M,data:_}},a;(function(l){l[l.start=0]="start",l[l.wait=1]="wait",l[l.success=2]="success",l[l.failure=3]="failure"})(a||(a={}))},51970:function(h,f,t){h.exports=t.p+"static/icon_gut.eb549782.png"},46677:function(h){h.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAB3VBMVEUAAAAAAP///wAAAP8AgP+A/wAAgL8AgP+//0AAceMAM8wAgOYAgO2k/zcAiN2Z/zMc//Gi/y6V9DWf/zUAgOKd9TEJN8ic/zEIg+APNsENNskHg94Ght8GhuEMN8gROcaf+TMLruQQNskFguAa+u+g+jIPNsQONcUOOcYON8QON8gEguCa9zEQN8id9y+b+DCa+DIOOMcDhOGe+TCb+TIGhOAGguEPNccGguIFhOEb9+wFgt+d9zCd+jIQN8UFgt8Fg+ION8UONsQZ9u2d+DIQOMWb+DGd+DAPN8YEhOAON8YGhOGd+TGd+TKc+DIFhOCd+jEFg+Cb+DEFguAFhOKc+DEPN8UFg+APOMYPOMWd+DEFhOEFg+Gc+TAFg+Cd+TIPOMad+TAPOMQVkded+TCd+TIGg+GC000Egt8EhOEFhOAJnOOH20gVndqd+TEFg+APN8Wd+TEPN8Wc+TAFg+Cd+DGc+DAFg+Cc+DCc+DAFhOAEg+AEg+F0wVsNseac+DESctEFg+Cd+DEEg+AFg+BoyW9z2mQEg+Fmrmqc+TEEg+Cc+DEThdWc+TEFg+AFg+AFg+Cc+DGc+TKc+DCc+DEFg+AFhOGc+DEFg+APN8Ua9uxK9qZl94Bt93Sc+DEyV4T2AAAAmHRSTlMAAQECAgIEBAQJCgoODg8PEhYYGBoaHB8hISYnKCoqLS0vLzExMzQ1Njg4OT9BQUVHSU1PUlNWVlhfX2BgYGFoaWpscHByc3V4en6Hh4qLjY2OkpOTk5WWl5ucn6GjpKSlqa6us7S1tbq6vr/Aw8rLy8vP09bX2Nzd3t/l5eXm5ufo6erq6+zt7u7v8PHz9Pf7/Pz9/f7+/rC8C3EAAAI5SURBVHja7dpFcxwxFEXhN04cZmaOw8zMzOwwMzPHYWaewPutGVdPpjoLJ1Wdnu6e63N20krfRlKpZEZEREREREREGS9fXw0QIEDkITX1tWLTI2ocLa8NygXDbrWlelYW5Fw+qEkwHJQvNQJIFiEbP5av96/qLh9eP6d7IpAtXv6urR2gASl0ZnKVBsT94jgRiPv+jv8F6Tc8yFKHeN3YGDexNCH+bnF8kF4XSvVPHOK+umzHTMIQX6MC8aUqkA/jRSB+v6sIxA+pQHxStKVOO1BsQVYg11tEgqz8fQBuL06MnBvqaAoQnx0PZGs+1NM0IFeqRCA+WgWyQwXyrFoE4kNVIMtUIHsjQIYtLDYmQ5DzcdxKsgB5oQL5Ui0C8bYqkE4RFt5h5p8dvBvqUUqQzhEgQ779pR9AgAABAgQIECBAgAABAgQIECBAgABJD/L9Z0M9vh3q1O6Yax83pOFehp+Il2Th5y8QIECAAAECBIgO5PS+UBMqGLLIshYQIECAAAECBAgQIECAAAECBAiQRgUZeCdSJ3cl3aZ/QAZ/rZDuAQECBAgQIECAAAECBAgQIECAAAECBEjZIb1VIF1UIK0/iUDspgrkhApkgwpkogqk3VsRiB1RgUxXgbR8IAKxFSqQNk9EIDZfBdL0rAjE+r4WgdgMFYitU4Hk9ohArNlOEYjlVn3WgJhNeS4CsR7HRCBmU2+IQKz5rEsakEKjtt3SgBTqM2/z8asP31Q+hIiIiIiIiIgS7hfalmYRHajhbwAAAABJRU5ErkJggg=="},1171:function(h,f,t){h.exports=t.p+"static/sun-bg.842d4713.608d9670.png"},68314:function(h,f,t){h.exports=t.p+"static/usdt.b1e4146b.png"}}]);
