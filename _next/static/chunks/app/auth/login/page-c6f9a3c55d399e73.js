(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[716],{2423:function(t,e,s){Promise.resolve().then(s.bind(s,5324))},5324:function(t,e,s){"use strict";s.r(e),s.d(e,{default:function(){return f}});var r=s(7437),i=s(2265),n=s(4467),a=s(9501),o=s(3842),u=s(4422),l=s(9827),c=s(2894),d=s(8238),h=s(4112),m=s(5345),p=class extends h.l{#t;#e=void 0;#s;#r;constructor(t,e){super(),this.#t=t,this.setOptions(e),this.bindMethods(),this.#i()}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(t){let e=this.options;this.options=this.#t.defaultMutationOptions(t),(0,m.VS)(this.options,e)||this.#t.getMutationCache().notify({type:"observerOptionsUpdated",mutation:this.#s,observer:this}),e?.mutationKey&&this.options.mutationKey&&(0,m.Ym)(e.mutationKey)!==(0,m.Ym)(this.options.mutationKey)?this.reset():this.#s?.state.status==="pending"&&this.#s.setOptions(this.options)}onUnsubscribe(){this.hasListeners()||this.#s?.removeObserver(this)}onMutationUpdate(t){this.#i(),this.#n(t)}getCurrentResult(){return this.#e}reset(){this.#s?.removeObserver(this),this.#s=void 0,this.#i(),this.#n()}mutate(t,e){return this.#r=e,this.#s?.removeObserver(this),this.#s=this.#t.getMutationCache().build(this.#t,this.options),this.#s.addObserver(this),this.#s.execute(t)}#i(){let t=this.#s?.state??(0,c.R)();this.#e={...t,isPending:"pending"===t.status,isSuccess:"success"===t.status,isError:"error"===t.status,isIdle:"idle"===t.status,mutate:this.mutate,reset:this.reset}}#n(t){d.V.batch(()=>{if(this.#r&&this.hasListeners()){let e=this.#e.variables,s=this.#e.context;t?.type==="success"?(this.#r.onSuccess?.(t.data,e,s),this.#r.onSettled?.(t.data,null,e,s)):t?.type==="error"&&(this.#r.onError?.(t.error,e,s),this.#r.onSettled?.(void 0,t.error,e,s))}this.listeners.forEach(t=>{t(this.#e)})})}};function b(){}var x=s(9376);let g=u.Ry().shape({username:u.Z_().required("Username is required"),password:u.Z_().min(6,"Password must be at least 6 characters").required("Password is required")});var f=()=>{let t=(0,l.NL)(),e=(0,x.useRouter)(),[s,u]=(0,i.useState)(""),{register:c,handleSubmit:h,formState:{errors:m}}=(0,a.cI)({resolver:(0,o.X)(g)}),f=function(t,e){var s,r;let n=(0,l.NL)(void 0),[a]=i.useState(()=>new p(n,t));i.useEffect(()=>{a.setOptions(t)},[a,t]);let o=i.useSyncExternalStore(i.useCallback(t=>a.subscribe(d.V.batchCalls(t)),[a]),()=>a.getCurrentResult(),()=>a.getCurrentResult()),u=i.useCallback((t,e)=>{a.mutate(t,e).catch(b)},[a]);if(o.error&&(s=a.options.throwOnError,r=[o.error],"function"==typeof s?s(...r):!!s))throw o.error;return{...o,mutate:u,mutateAsync:o.mutate}}({mutationFn:async t=>(await n.Z.post("/auth/login",t)).data,onError:t=>{var e,s;u((null===(s=t.response)||void 0===s?void 0:null===(e=s.data)||void 0===e?void 0:e.message)||"Login failed")},onSuccess:s=>{console.log("data: ",s.user),console.log(s.user),u(""),t.invalidateQueries(["user"]),"driver"===s.user.type?e.push("/user/dashboard"):e.push("/service-provider/dashboard")}});return(0,r.jsxs)("div",{className:"min-h-screen flex flex-col justify-center items-center p-4 bg-white",children:[(0,r.jsx)("div",{className:"flex justify-center h-[180px] w-[180px] items-center",children:(0,r.jsx)("img",{src:"/gtlogo.jpg",alt:"Logo"})}),(0,r.jsxs)("div",{className:"w-full max-w-sm bg-white rounded-lg p-6 flex justify-center items-center flex-col",children:[(0,r.jsxs)("form",{onSubmit:h(t=>{e.push("/user/dashboard")}),className:"space-y-5 w-full mb-9",children:[(0,r.jsx)("p",{className:"text-4xl font-bold",children:"Login"}),(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{htmlFor:"username",className:"block text-xl font-medium text-gray-700",children:"Username"}),(0,r.jsx)("input",{id:"username",className:"bg-gray-200 block w-full p-3 border rounded-md ".concat(m.username?"border-red-500":"border-gray-300"),...c("username")}),m.username&&(0,r.jsx)("p",{className:"text-red-500 text-md mt-1",children:m.username.message})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{htmlFor:"password",className:"block text-xl font-medium text-gray-700",children:"Password"}),(0,r.jsx)("input",{type:"password",id:"password",className:"bg-gray-200 block w-full p-3 border rounded-md ".concat(m.password?"border-red-500":"border-gray-300"),...c("password")}),m.password&&(0,r.jsx)("p",{className:"text-red-500 text-sm mt-1",children:m.password.message})]}),s&&(0,r.jsx)("p",{className:"text-red-500 text-sm mt-2",children:s}),(0,r.jsx)("button",{type:"submit",className:"w-full py-4 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition",disabled:f.isPending,children:f.isPending?"Logging in...":"Login"})]}),(0,r.jsx)("div",{className:"signup-section",children:(0,r.jsxs)("p",{children:["New to Gas N Tire?"," ",(0,r.jsx)("a",{href:"/auth/signup",className:"signup-btn text-blue-700",children:"Sign Up Here"})]})})]})]})}},4467:function(t,e,s){"use strict";let r=s(3464).Z.create({baseURL:"http://127.0.0.1:8001/api",timeout:1e4,headers:{"Content-Type":"application/json"}});r.interceptors.request.use(t=>t,t=>Promise.reject(t)),r.interceptors.response.use(t=>t,t=>Promise.reject(t)),e.Z=r}},function(t){t.O(0,[417,462,971,117,744],function(){return t(t.s=2423)}),_N_E=t.O()}]);