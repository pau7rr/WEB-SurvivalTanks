export default function ({redirect}) {

    if (!localStorage.getItem('jwt')) return redirect('/')

}