__NUXT_JSONP__("/rows/Custom-Row-View", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q){return {data:[{document:{slug:"Custom-Row-View",description:"",title:"Custom Row View",position:13,category:"Row",fullscreen:true,toc:[{id:B,depth:3,text:C}],body:{type:"root",children:[{type:b,tag:j,props:{},children:[{type:a,value:"If you would like full control over your rows without using the Column formatter, then you can define a "},{type:b,tag:g,props:{},children:[{type:a,value:u}]},{type:a,value:" and return the string to the view to render the rows. The view will be passed the current "},{type:b,tag:g,props:{},children:[{type:a,value:D}]},{type:a,value:E}]},{type:a,value:h},{type:b,tag:j,props:{},children:[{type:a,value:"The string is just passed to a regular Laravel "},{type:b,tag:g,props:{},children:[{type:a,value:"@include()"}]},{type:a,value:" so it starts at the resources\u002Fviews directory which you do not need to specify."}]},{type:a,value:h},{type:b,tag:v,props:{className:[w]},children:[{type:b,tag:x,props:{className:[y,"language-php"]},children:[{type:b,tag:g,props:{},children:[{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:"public"}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:F}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,F]},children:[{type:a,value:u}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"("}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:")"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:":"}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,r,"return-type"]},children:[{type:a,value:G}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"{"}]},{type:a,value:H},{type:b,tag:c,props:{className:[d,"comment"]},children:[{type:a,value:"\u002F\u002F Becomes \u002Fresources\u002Fviews\u002Flocation\u002Fto\u002Fmy\u002Frow.blade.php"}]},{type:a,value:H},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:"return"}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,G,"single-quoted-string"]},children:[{type:a,value:"'location.to.my.row.view'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:";"}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"}"}]},{type:a,value:h}]}]}]},{type:a,value:h},{type:b,tag:j,props:{},children:[{type:b,tag:I,props:{},children:[{type:a,value:J}]},{type:a,value:" You do not need to wrap in a "},{type:b,tag:g,props:{},children:[{type:a,value:K}]},{type:a,value:" as you are only specifying your cells in order as they appear in your "},{type:b,tag:g,props:{},children:[{type:a,value:"columns()"}]},{type:a,value:" array. This leaves room for the component to add extra columns as needed such in the case of bulk exports."}]},{type:a,value:h},{type:b,tag:v,props:{className:[w]},children:[{type:b,tag:x,props:{className:[y,L]},children:[{type:b,tag:g,props:{},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:n}]},{type:a,value:o}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]}]},{type:a,value:" \u002F\u002F Note: Tailwind Specific, see below.\n    {{ ucfirst($row-\u003Etype) }}\n"},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:n}]},{type:a,value:o}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]}]},{type:a,value:z},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:n}]},{type:a,value:o}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]}]},{type:a,value:"\n    {{ $row-\u003Ename }}\n"},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:n}]},{type:a,value:o}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]}]},{type:a,value:z},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:n}]},{type:a,value:o}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]}]},{type:a,value:"\n    @if ($row-\u003EisAdmin())\n        @lang('All')\n    @elseif (! $row-\u003Epermissions-\u003Ecount())\n        @lang('None')\n    @else\n        {!! collect($row-\u003Epermissions-\u003Epluck('description'))-\u003Eimplode('"},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:"br"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"\u002F\u003E"}]}]},{type:a,value:"') !!}\n    @endif\n"},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:n}]},{type:a,value:o}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]}]},{type:a,value:z},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:n}]},{type:a,value:o}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]}]},{type:a,value:"\n    @if(! $row-\u003EisAdmin())\n        "},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:A}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:"href"}]},{type:b,tag:c,props:{className:[d,M]},children:[{type:b,tag:c,props:{className:[d,e,N]},children:[{type:a,value:O}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:"{{ route("},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:P}]},{type:a,value:"admin.auth.role.edit"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:P}]},{type:a,value:", $row) }}"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:"class"}]},{type:b,tag:c,props:{className:[d,M]},children:[{type:b,tag:c,props:{className:[d,e,N]},children:[{type:a,value:O}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:"text-primary-600 font-medium hover:text-primary-900"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]}]},{type:a,value:"Manage"},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:A}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]}]},{type:a,value:"\n    @else\n        "},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:c}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]}]},{type:a,value:"-"},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:c}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]}]},{type:a,value:"\n    @endif\n"},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:n}]},{type:a,value:o}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]}]},{type:a,value:h}]}]}]},{type:a,value:h},{type:b,tag:j,props:{},children:[{type:a,value:"The row view will be passed the current model named as "},{type:b,tag:g,props:{},children:[{type:a,value:D}]},{type:a,value:E}]},{type:a,value:h},{type:b,tag:"h3",props:{id:B},children:[{type:b,tag:A,props:{ariaHidden:"true",href:"#using-the-included-blade-components-in-the-row-view",tabIndex:-1},children:[{type:b,tag:c,props:{className:["icon","icon-link"]},children:[]}]},{type:a,value:C}]},{type:a,value:h},{type:b,tag:j,props:{},children:[{type:a,value:"To create cells, you should use the "},{type:b,tag:g,props:{},children:[{type:a,value:"\u003Cx-livewire-tables::table.cell\u003E"}]},{type:a,value:" table cell component, which will be rendered to:"}]},{type:a,value:h},{type:b,tag:v,props:{className:[w]},children:[{type:b,tag:x,props:{className:[y,L]},children:[{type:b,tag:g,props:{},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:Q}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:"{{"}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:"$attributes-"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]}]},{type:a,value:"merge(['class' =\u003E 'px-3 py-2 md:px-6 md:py-4 whitespace-no-wrap text-sm leading-5 text-gray-900']) }}\u003E\n    {{ $slot }}\n"},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:Q}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]}]},{type:a,value:h}]}]}]},{type:a,value:h},{type:b,tag:j,props:{},children:[{type:a,value:"Note: The default "},{type:b,tag:g,props:{},children:[{type:a,value:"x-livewire-tables::table.row"}]},{type:a,value:q},{type:b,tag:g,props:{},children:[{type:a,value:"x-livewire-tables::table.cell"}]},{type:a,value:" default to Tailwind, for Bootstrap specific versions use "},{type:b,tag:g,props:{},children:[{type:a,value:"x-livewire-tables::bs4.table.row"}]},{type:a,value:q},{type:b,tag:g,props:{},children:[{type:a,value:"x-livewire-tables::bs4.table.cell"}]},{type:a,value:" for Bootstrap 4, or "},{type:b,tag:g,props:{},children:[{type:a,value:"x-livewire-tables::bs5.table.row"}]},{type:a,value:q},{type:b,tag:g,props:{},children:[{type:a,value:"x-livewire-tables::bs5.table.cell"}]},{type:a,value:" for Bootstrap 5."}]},{type:a,value:h},{type:b,tag:j,props:{},children:[{type:a,value:"There is also a Tailwind alias of "},{type:b,tag:g,props:{},children:[{type:a,value:"x-livewire-tables::tw.table.row"}]},{type:a,value:q},{type:b,tag:g,props:{},children:[{type:a,value:"x-livewire-tables::tw.table.cell"}]},{type:a,value:" if you want to be specific."}]},{type:a,value:h},{type:b,tag:j,props:{},children:[{type:a,value:"The helpers are generally more for Tailwind users, as Bootstrap does not have any default added classes to their rows or cells currently, you can substitute regular "},{type:b,tag:g,props:{},children:[{type:a,value:K}]},{type:a,value:q},{type:b,tag:g,props:{},children:[{type:a,value:"\u003Ctd\u003E"}]},{type:a,value:" if you prefer. Though if any formatting is added in the future, you may have to refactor."}]},{type:a,value:h},{type:b,tag:j,props:{},children:[{type:a,value:"You are free to publish and change these views as needed."}]},{type:a,value:h},{type:b,tag:j,props:{},children:[{type:b,tag:I,props:{},children:[{type:a,value:J}]},{type:a,value:" Using "},{type:b,tag:g,props:{},children:[{type:a,value:u}]},{type:a,value:" will supersede any column formatting."}]}]},dir:"\u002Fen\u002Frows",path:"\u002Fen\u002Frows\u002FCustom-Row-View",extension:".md",createdAt:"2021-10-17T15:00:25.357Z",updatedAt:"2021-10-17T15:00:25.358Z",to:"\u002Frows\u002FCustom-Row-View"},prev:{title:"Misc. Column Functionality",path:"\u002Fen\u002Fcolumns\u002FMisc.-Column-Functionality",to:"\u002Fcolumns\u002FMisc.-Column-Functionality"},next:{title:"Clickable Rows",path:"\u002Fen\u002Frows\u002FClickable-Rows",to:"\u002Frows\u002FClickable-Rows"}}],fetch:{},mutations:[]}}("text","element","span","token","punctuation","tag","code","\n","\u003E","p"," ","\u003C","namespace","x-livewire-tables:",":table.cell","\u003C\u002F"," and ","keyword","attr-name","\"","rowView","div","nuxt-content-highlight","pre","line-numbers","\n\n","a","using-the-included-blade-components-in-the-row-view","Using the included blade components in the row view:","$row",".","function","string","\n     ","strong","Note:","\u003Ctr\u003E","language-html","attr-value","attr-equals","=","'","td")));