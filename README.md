# Page.Data Stale Issue

This project is a reproduction of an issue with Page.Data being cached when leaving the site and returning. 

The user logs in, then navigates away from the site, clicks a bookmark to another site or uses browser navigation to go back to a previous site. 
If the user returns to the site using browser navigation the user should be logged in but the old state is used showing them logged out until a refresh is done.

Each page console logs the Page data during navigation.

recording.mp4 shows a reproduction of this issue.

https://github.com/user-attachments/assets/6d82f9cb-3cf8-4ce2-907e-e20bcb05083e

