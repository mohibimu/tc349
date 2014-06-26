function init(){
	
	//******Document variables*******
	/////////////////////////////////
	var navList = document.getElementById("nav");
	var contBlock = document.getElementById("content");
			
	var header0 = document.getElementById("headWrap");
	var headBox0 = header0.getBoundingClientRect();
	var headBox00 = {
		top:parseInt(headBox0.top),
		bottom:parseInt(headBox0.bottom),
		left:parseInt(headBox0.left),
		right:parseInt(headBox0.right),
		width:function(){this.newWidth=this.right-this.left;return this.newWidth},
		height:function(){this.newHeight=this.bottom-this.top;return this.newHeight}
	};
	var headBoxPadding = headBox00.height() + "px";
	console.log(headBoxPadding);
	
	document.getElementById("content").style.paddingTop = headBoxPadding;
	/*
	var sideBar = document.getElementById("sideBar");
	var sideBox1 = sideBar.getBoundingClientRect();
	var sideBox = {
			top:parseInt(sideBox1.top),
			bottom:parseInt(sideBox1.bottom),
			left:parseInt(sideBox1.left),
			right:parseInt(sideBox1.right),
			width:function(){this.newWidth=this.right-this.left;return this.newWidth},
			height:function(){this.newHeight=this.bottom-this.top;return this.newHeight}
		};
	*/

	//******Initial Document Styling******
	//////////////////////////////////////
	


	//******Event Listeners here*******
	///////////////////////////////////
	
	/*////////////////////////////////////////////////////////////////////////////////
	// 'onResize' event listener on window, affects the padding of #content.
	////////////////////////////////////////////////////////////////////////////////*/
	
	window.addEventListener('resize',function(e){
		
		var header0 = document.getElementById("headWrap");
		var headBox0 = header0.getBoundingClientRect();
		var headBox00 = {
			top:parseInt(headBox0.top),
			bottom:parseInt(headBox0.bottom),
			left:parseInt(headBox0.left),
			right:parseInt(headBox0.right),
			width:function(){this.newWidth=this.right-this.left;return this.newWidth},
			height:function(){this.newHeight=this.bottom-this.top;return this.newHeight}
		};
		var headBoxPadding = headBox00.height() + "px";
		console.log(headBoxPadding);
		
		document.getElementById("content").style.paddingTop = headBoxPadding;
	});
	/*
	var resizeFlagUp = true;
	var resizeFlagDown = true;
	var proPicWrap = document.getElementById('proPicWrap');
	var proPicLoc = proPicWrap.innerHTML;
	var wInnerHInit = window.innerHeight;
	var sideHeight = sideBox.height()+(document.getElementById("theFoot").getBoundingClientRect().bottom-document.getElementById("theFoot").getBoundingClientRect().top)+(document.getElementById("theHead").getBoundingClientRect().bottom-document.getElementById("theHead").getBoundingClientRect().top);
	if( resizeFlagDown && (wInnerHInit < sideHeight)){
			resizeFlagUp = true;
			resizeFlagDown = false;
			console.log("**Limited width**");
			proPicWrap.innerHTML = '';
			sideBar.style.marginTop=7.5+'px';
		}
		if(resizeFlagUp && wInnerHInit >= sideHeight){
			resizeFlagUp = false;
			resizeFlagDown = true;
			proPicWrap.innerHTML = proPicLoc;
			sideBar.style.marginTop=2+'px';
		}
	*/
	
	/*///////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// 'onScroll' event listener on window, affects header
	// ##Changes made to the DOM by this function using the setAttribute method do not take effect for some reason.##
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////
	window.addEventListener('scroll',function(e){
		///////////////////////////////////////////////////////////////////////////////////
		//Scroll event function variables.  Used to determine offset of the footer/sidebar.
		var header = document.getElementById("theHead");
		var headBox1 = header.getBoundingClientRect();
		var headBox = {
			top:parseInt(headBox1.top),
			bottom:parseInt(headBox1.bottom),
			left:parseInt(headBox1.left),
			right:parseInt(headBox1.right),
			width:function(){this.newWidth=this.right-this.left;return this.newWidth},
			height:function(){this.newHeight=this.bottom-this.top;return this.newHeight}
		};
		// In this case, footer now refers to content, easier to rename one thing than 15...for now
		var footer = document.getElementById("content");
		var footBox1 = footer.getBoundingClientRect();
		var footBox = {
			top:parseInt(footBox1.top),
			bottom:parseInt(footBox1.bottom),
			left:parseInt(footBox1.left),
			right:parseInt(footBox1.right),
			width:function(){this.newWidth=this.right-this.left;return this.newWidth},
			height:function(){this.newHeight=this.bottom-this.top;return this.newHeight}
		};
		//////////////////////////////////////////////////////////////////////////////////////
		//Computes difference using top of footer and bottom of sidebar
		var difference = sideBar.getBoundingClientRect().bottom-footBox.bottom; 
		console.log('=======================');
		console.log('difference: '+difference);
		console.log('scroll: '+window.pageYOffset);
		console.log('bottom of sideBar: '+sideBar.getBoundingClientRect().bottom);
		console.log('top of foot: '+footBox.top);
		console.log('bottom of foot: '+footBox.bottom);
		console.log('innerHeight: '+window.innerHeight);
		
		/////////////////////////////////////////////////////////
		//If difference is 0 or negative, the margin attribute (from either #content or #theFoot) 
		//is changed to the offset.  This keeps the footer pushed down and keeps #sideBar and #theFoot from overlapping
		if(difference <= 0){
			contBlock.style.bottom=0+'px';
		}
		else{
			var offset = difference;
			contBlock.style.paddingBottom = difference+'px';
		}
		//console.log("bottom: "+header.getBoundingClientRect().bottom);
		//console.log("top: "+header.getBoundingClientRect().top);
		var contBlockTop = parseInt(contBlock.getBoundingClientRect().top);
		if( contBlockTop <=38){
			header.setAttribute('position','fixed');
			header.setAttribute('border-bottom','solid 2px #000');
		}
		else{
			header.setAttribute('position','relative');
			header.removeAttribute('border-bottom');
		}
		return false;
	});
	*/
	/*////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// 'onClick' event listener added to sidebar/navlist for list items.  List items navigate to section headings in contentBlock.  
	// ##Work on adding smooth scroller to this function so that page doesn't "jump" to section.##
	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	navList.addEventListener('click', function(e){
		if(e.target && e.target.nodeName == 'LI'){
			console.log('working');
			if(e.target.getAttribute('name') == '#'){
				console.log('also working');
				return false;
			}
			var tagID = e.target.getAttribute('name').replace('#','');
			var scrollToElementName = document.getElementById(tagID);
			var rect = scrollToElementName.getBoundingClientRect();
			var yPos = rect.top;
			var screenPos = yPos+window.pageYOffset;
			window.scrollTo(0,screenPos-61);
		}
	return false;
	});
*/

	/*////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// 'onHover' event listener added to sidebar/navlist for sub-list items.  List items navigate to section headings in contentBlock.  
	// ##Work on adding smooth scroller to this function so that page doesn't "jump" to section.##
	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
	navList.addEventListener('mouseover', function(e){
		var collapsedNav = document.getElementById('projectNav');
		console.log(e); 
		if(e.target && e.target.nodeName == 'LI'){
			console.log('fire 2');
			if(e.target.getAttribute('name') == '#experience'){
				console.log('fire 3');
				collapsedNav.setAttribute('visibility','visible');
				collapsedNav.setAttribute('display','block');
				
			}
		}
		return false;
	});
	navList.addEventListener('mouseout', function(e){
		var collapsedNav = document.getElementById('projectNav');
		console.log(e); 
		if(e.target && e.target.nodeName == 'LI'){
			console.log('fire 2');
			if(e.target.getAttribute('name') == '#experience'){
				console.log('fire 3');
				collapsedNav.setAttribute('visibility','hidden');
				collapsedNav.setAttribute('display','none');
			}
		}
		return false;
	});
}

window.onload = init
