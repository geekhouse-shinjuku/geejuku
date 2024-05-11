
export default function ShareX() {
  return (
	  <div class="container mx-auto md:px-16">
	  	<a class="twitter-share-button"
		  href={
			  `https://twitter.com/intent/tweet?hashtags=ギークハウス新宿`}
  		  data-size="large">
			{/* <i class="fa fa-twitter-square fa-xl" aria-hidden="true"></i> */}
		</a>
	  </div>
  );
}
