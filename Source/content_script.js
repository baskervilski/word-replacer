walk(document.body);

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;

	v = v.replace(/\bThe Cloud\b/g, "My Butt");
	v = v.replace(/\bThe cloud\b/g, "My butt");
	v = v.replace(/\bthe Cloud\b/g, "my Butt");
	v = v.replace(/\bthe cloud\b/g, "my butt");
	
	v = v.replace(/\bSJW(s?)\b/ig, "skeleton$1");
	v = v.replace(/\bsocjus\b/ig, "skeletonism");
	v = v.replace(/\b(a)n (SJWs?)\b/ig, "$1 $2");
	v = v.replace(/\b(s)ocial justice (warriors?)/ig, "$1keleton $2");
	
	textNode.nodeValue = v;
}


