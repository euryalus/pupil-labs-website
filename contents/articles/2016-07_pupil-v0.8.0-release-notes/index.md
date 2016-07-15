---
 title: Pupil v0.8.0 release notes
 date: Tue Jul 05 2016 09:47:48 GMT+0700 (ICT)
 author: Pupil Dev Team
 subtitle: Release notes for v0.8.0 for the Pupil Platform. Includes lots of changes to the message format, new inter proecss communication (IPC Backbone), and many more new features...
 ---

<script src="//cdn.rawgit.com/showdownjs/showdown/1.3.0/dist/showdown.min.js"></script>
<script type="text/javascript">
document.addEventListener("DOMContentLoaded", function(event) { 
	$(document).ready(function() {
		$.ajax({
			type: 'GET',
			url: "https://api.github.com/repos/pupil-labs/pupil/releases/tags/v0.8",
			dataType: "jsonp",
			success: function(data, textStatus,jaXHR){
				var converter = new showdown.Converter();
				var text = data.data.body;
				var html = converter.makeHtml(text); 
				$('section[class="content"]').html(html);
				$('a[href="#downloads"]').prop('href',data.data.html_url);
			}
		});
	});
});
</script>