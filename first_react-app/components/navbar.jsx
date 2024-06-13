import '../assets/bootstrap.min.css';

function NavBar (props) {
    return <div class="container-fluid">
    <div class="col-md-12">
        <ul class="nav nav-pills justify-content-end">
            <li class="nav-item">
              <a class="nav-link active" href="about_me.html">About Me</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Experience</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Project</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="contact.html">Contact</a>
            </li>
          </ul>
    </div>
    </div>
}

export default NavBar