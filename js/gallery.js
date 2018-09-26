// Activates the image gallery.
// The main task is to attach an event listener to each image in the gallery
// and respond appropriately on click.

// function activateGallery() {
//   let thumbnails = document.querySelector("#gallery-thumbs").
//                             querySelectorAll("img");
//   let mainImage = document.querySelector("#gallery-photo img");

//   thumbnails.forEach(function(thumbnail) {
//     thumbnail.addEventListener("click", function() {
//       // Set clicked image as main image.
//       let newImageSrc = thumbnail.dataset.largeVersion;
//       mainImage.setAttribute("src", newImageSrc);
//     });
//   });
// }

function activateGallery(){
	// let thumbnails = document.querySelector("#gallery-thumbs").querySelectorAll("img");
	let thumbnails = document.querySelectorAll("#gallery-thumbs > div > img");
	let mainImage = document.querySelector("#gallery-photo img");

	thumbnails.forEach(function(boo){
		boo.addEventListener("click", function(){
			let newImageSrc = boo.dataset.largeVersion;
			let newImageAlt = boo.dataset.title;
			let newImageDesc = boo.dataset.description;
			mainImage.setAttribute("src", newImageSrc);
			mainImage.setAttribute("alt", newImageAlt);

			// Change which image is current.
			let currentClass = "current";
		      document.querySelector(".current").classList.remove(currentClass);
		      boo.parentNode.classList.add(currentClass);

		    // Change description and title
		    let galleryInfo = document.querySelector("#gallery-info");
		    let title = galleryInfo.querySelector(".title");
		    let description = galleryInfo.querySelector(".description");
		    title.innerHTML = newImageAlt;
		    description.innerHTML = newImageDesc;

		});
	});
}