


1) Prevents links from trying to go somewhere



2) Check if the li we just clicked on has the "active" class. If it does, it means that the user wants to slide the menu away from view, so we use slideUp. If it does not have this class it means the user wants to see that piece of content. Calling slideDown when the menu is already down won't do anything, so it'll stay visible, and we hide the things we don't want to see and show the one we do want to see


3) Hide the content sections we don't want to see and show the one we do want to see. Need to put this above the slideDown to get the content ready before it's visible


4) Slide down the entire content sections


5) Make sure to clear out all of the "active" classes on the nav to prevent multiple tabs from having the active class at the same time


6) Add class of active to create gray background and yellow lettering
