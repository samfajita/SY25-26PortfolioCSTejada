Guided Question: What changed compared to the default static positioning? Try to give different values to top and left or you can change it to bottom, right.

Compared to the default static positioning, I am able to adjust the position of the sidebar relative to its normal static position using top,right,bottom, and left margins.

Guided Question: What happens when you scroll the page? Why does the footer behave differently from position relative?

Using fixed positioning makes an element positioned relative to the viewport, resulting in an element that stays on screen the whole time, compared to other elements that are positioned in relation with the page.

Guided Question: What is the effect of position: absolute on an element? How is it different from fixed?

Absolute positiong positions an element relative to its nearest positioned ancestor. In other terms, it ignores original document flow and this allows it to be put anywhere on the document. It is different from fixed positioning as it still is relative to the page and its ancestor, while fixed positioning is relative entirely to the viewport.

Guided Question: Why does the notice appear on top of the content? What happens if you swap the z‑index values?

The notice appears on top of the content as its z-index priority is higher. The z-index only works on positioned elements, and it lets the you choose which element is the priority over the other, based on how high the number is. Since 2 > 1, the notice displays over the content.

Challenge:

What changes that you have to do on the code that will position .notice box on the top right corner of the .content box? Please write the code on paper as well (both html and css on the part of .notice and .content).
Try to change the position of .content to relative then to fixed. What do you observed each time?
What do you observe on about the effect of z-index on .notice and .content boxes?

Please answer the following reflection questions (15 minutes)

a. Could you summarize the differences between the CSS position values (static, relative, absolute, fixed)?
    The CSS position values determine where elements are located on a webpage. When no position is specified, static is the default positioning, and it follows normal webpage layout. Relative positioning allows elements to be displaced using margins relative to their original positioning. Absolute positioning on the other hand positions elements relative to their nearest positioned ancestor, ignoring web page layout and allowing full dictation on location. Lastly, fixed positiong allows an element to remain on screen the entire time, as it makes the element relative to the viewport rather than the webpage.

b. How does absolute positioning depend on its parent element?
    Absolute positiong depends on its parent element by using margins to affect its position. Rather than following normal layout positioning like static positioning, absolute positioning uses relative to its parent element. For example, if the whole webpage is the parent element, using a bottom margin of 20px will position the element 20 pixels away from the bottom of the page, not from where it would usually be if its static positioning.

c. How do you differentiate sticky from fixed (you can research on sticky)?
    While fixed positioning makes elements relative to the viewport, sticky positioning can also have the same "fixed" effect on an element, however it still is relative to the webpage due to its scroll threshold property. Before scrolling past it, it acts like a relatively positioned element, however, it sticks to your screen once ou scroll past that threshold.

d. If you were designing a webpage for a school event, how might you use positioning to highlight important information? Please give concrete examples.
    If i were to design a webpage for a school event, majority of the elements would be in static positiong format, as it is the most sensible and natural way to display information. I would then use relative positiong for some text boxes if it is important information that should be highlighted. For information that is not connected to the main information on the webpage, I would use absolute positioning as it can be positioned under my command and not relative to the static positioning. Lastly I would use fixed positioning for footers and headers for navigation and for important details.