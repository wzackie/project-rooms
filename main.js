function imageGallery() {
  // تعرف الداله للصور

  const highlight = document.querySelector('.the_main_photo');
  // الصوره الكبيره

  const previews = document.querySelectorAll('.the_rooms img');
  // الصوره الصغيره

previews.forEach(preview => {
  preview.addEventListener('click', function() {
// تكرارها لما اعملclick

const smallSrc = this.src;
const bigSrc = smallSrc.replace('small', 'big');
// الصوره الصغيره تكون مكان الكبيره

previews.forEach(preview => preview.classList.remove("one"));
// اشيب الصوره من الكل

highlight.src = bigSrc;
// احدث الصوره الكبيره

preview.classList.add('one');
// اضيف الصوره 

});
});
}
  imageGallery();

