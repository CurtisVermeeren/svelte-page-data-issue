# Page.Data Stale Issue

This project is a reproduction of an issue with Page.Data being cached when leaving the site and returning. 

The user logs in, then navigates away from the site, clicks a bookmark to another site or uses browser navigation to go back to a previous site. 
If the user returns to the site using browser navigation the user should be logged in but the old state is used showing them logged out until a refresh is done.

Each page console logs the Page data during navigation.

<video src="[recording.mp4](https://github.com/CurtisVermeeren/svelte-page-data-issue/raw/73b76c910ce4bd807321ee31c603e705db086a17/recording.mp4)" controls></video>
