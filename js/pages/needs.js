/* WEBIFY AI MSME Needs Assessment — transparent, rule-based prototype. */
W.pages = W.pages || {};
W.pages.needs = (function () {
  var ui = W.ui, e = ui.esc;
  var questions = [
    { id:'sector', title:'What type of business do you operate?', hint:'This helps Webify interpret your needs in the right business context.', options:['Food processing / food service','Manufacturing / crafts','Retail / trading','Agriculture / fisheries','Tourism / services','Other'] },
    { id:'challenge', title:'What is your biggest business challenge right now?', hint:'Choose the issue that has the greatest effect on your daily operations.', options:['Low production capacity or slow processes','Outdated or insufficient equipment','Product quality, testing or standards','Packaging, labeling or product development','Limited digital tools or online presence','Energy use, waste or resource efficiency','Skills, training or technical know-how'] },
    { id:'stage', title:'How would you describe your current setup?', hint:'Your answer helps identify practical next steps.', options:['Mostly manual processes','Some tools, but not connected','Using modern equipment or software','Not sure / still assessing'] },
    { id:'readiness', title:'What resources could you currently commit?', hint:'This is a planning indicator, not an eligibility or funding decision.', options:['Limited budget; need guidance first','Can invest a small amount','Have a planned budget for improvements','Need to explore available assistance'] },
    { id:'goal', title:'What outcome matters most to your business?', hint:'We will prioritize recommendations around this goal.', options:['Increase output and productivity','Improve product quality and consistency','Reduce operating costs or waste','Develop or improve a product','Adopt digital tools and reach more customers','Build staff skills and technical capability'] }
  ];
  function recommend(a) {
    var map = {
      'Low production capacity or slow processes':['Production process assessment','Review workflow, bottlenecks and production layout before selecting equipment.'],
      'Outdated or insufficient equipment':['Equipment and technology assessment','Identify equipment specifications that fit the product, capacity and operating conditions.'],
      'Product quality, testing or standards':['Product quality and testing support','Explore appropriate testing, quality-control practices and standards guidance.'],
      'Packaging, labeling or product development':['Packaging and product development support','Review packaging functionality, labeling needs, shelf-life considerations and product improvement options.'],
      'Limited digital tools or online presence':['Digitalization and business systems','Consider practical tools for inventory, sales, records, customer communication and online presence.'],
      'Energy use, waste or resource efficiency':['Resource and energy efficiency review','Assess energy use, material losses and waste points before choosing an intervention.'],
      'Skills, training or technical know-how':['Technical training and consultancy','Identify the specific skills gap and the training or expert guidance needed.']
    };
    var r = map[a.challenge] || map['Skills, training or technical know-how'];
    return [r[0], r[1], ['Business sector: '+a.sector,'Current setup: '+a.stage,'Resource readiness: '+a.readiness,'Priority outcome: '+a.goal]];
  }
  return {
    title:function(){return 'AI MSME Needs Assessment';},
    render:function(){return '<div class="wrap page-pad narrow" id="msme-assessment"></div>';},
    mount:function(root){
      var box=root.querySelector('#msme-assessment'), i=-1, ans={}, saved=JSON.parse(localStorage.getItem('webify.msmeneeds')||'null');
      function intro(){
        box.innerHTML=ui.head('WEBIFY BUSINESS INTELLIGENCE','Discover the technology your business needs','A guided needs assessment that helps identify operational gaps and possible technology or technical-assistance pathways.')+
          '<div class="w-assess-intro"><div class="w-assess-copy"><span class="w-chip">AI-ASSISTED • PROTOTYPE</span><h2>Turn business challenges into clearer next steps.</h2><p>Answer five short questions. Webify will organize your responses, identify a priority need and generate an explainable preliminary recommendation.</p><ul><li>Sector-aware business profiling</li><li>Operational and technology gap classification</li><li>Readiness considerations and suggested next steps</li></ul><button class="btn btn-primary btn-lg" id="start">Start my assessment →</button>'+(saved?'<button class="btn btn-ghost btn-lg" id="previous">View previous assessment</button>':'')+'</div><div class="w-assess-art"><img src="assets/wibz.png" alt="Wibz, Webify’s AI assessment companion"></div></div><p class="w-disclaimer">Prototype notice: recommendations are generated from predefined assessment rules and sample knowledge. They are not official DOST endorsements, eligibility decisions, or confirmed service referrals.</p>';
        box.querySelector('#start').onclick=function(){i=0;question();};
        var p=box.querySelector('#previous');if(p)p.onclick=function(){result(saved);};
      }
      function question(){var q=questions[i];box.innerHTML='<div class="w-progress"><span>ASSESSMENT</span><b>Step '+(i+1)+' of '+questions.length+'</b><div><i style="width:'+((i+1)/questions.length*100)+'%"></i></div></div><section class="w-question"><span class="eyebrow">BUSINESS PROFILE</span><h1 tabindex="-1">'+e(q.title)+'</h1><p class="muted">'+e(q.hint)+'</p><div class="w-options">'+q.options.map(function(o){return '<button class="w-option" type="button">'+e(o)+'<span>›</span></button>';}).join('')+'</div><button class="btn btn-ghost" id="back">← '+(i?'Previous question':'Back')+'</button></section>';
        box.querySelectorAll('.w-option').forEach(function(b){b.onclick=function(){ans[q.id]=b.textContent.replace('›','').trim();i++;if(i<questions.length)question();else{localStorage.setItem('webify.msmeneeds',JSON.stringify(ans));result(ans);}};});
        box.querySelector('#back').onclick=function(){if(i){i--;question();}else intro();};box.querySelector('h1').focus({preventScroll:true});
      }
      function result(a){var rec=recommend(a);box.innerHTML='<div class="w-result-head"><span class="w-chip">PRELIMINARY ASSESSMENT</span><h1 tabindex="-1">Your priority need is identified.</h1><p>Based on your answers, Webify has organized a starting point for your business improvement journey.</p></div><section class="w-recommend"><span class="eyebrow">PRIORITY RECOMMENDATION</span><h2>'+e(rec[0])+'</h2><p>'+e(rec[1])+'</p><h3>Assessment summary</h3><ul>'+rec[2].map(function(x){return '<li>'+e(x)+'</li>';}).join('')+'</ul><div class="w-next"><b>Suggested next step</b><p>Prepare details about your current process, equipment, capacity and constraints. A qualified technical adviser or relevant support office can validate the need and determine suitable options.</p><a class="btn btn-primary" href="https://www.dost.gov.ph/" target="_blank" rel="noopener">Visit official DOST website ↗</a></div></section><div class="w-disclaimer">This result is a preliminary, rule-based prototype output. Webify does not verify DOST program eligibility, current funding, service availability or technical suitability. All referrals require confirmation by the responsible institution.</div><div class="btn-row"><button class="btn btn-ghost" id="again">Retake assessment</button><button class="btn btn-primary" id="print">Print summary</button></div>';box.querySelector('#again').onclick=function(){ans={};i=0;question();};box.querySelector('#print').onclick=function(){print();};box.querySelector('h1').focus({preventScroll:true});}
      intro();
    }
  };
})();
