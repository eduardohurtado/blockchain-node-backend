import { SOCIAL_MEDIA } from 'src/assets/enums';

// Component styles
import './footer.css';

const Footer = () => {
    return (
        <>
            <footer className='bg-body-tertiary text-center footer-body'>
                {/* <!-- Grid container --> */}
                <div className='container p-4'>
                    {/* <!-- Section: Social media --> */}
                    <section className='mb-4'>
                        {/* <!-- Linkedin --> */}
                        <a
                            data-mdb-ripple-init
                            className='btn btn-outline btn-floating m-1'
                            href={SOCIAL_MEDIA.linkedin}
                            role='button'
                            target='blank'
                        >
                            <i className='fab fa-linkedin-in'></i>
                        </a>

                        {/* <!-- Github --> */}
                        <a
                            data-mdb-ripple-init
                            className='btn btn-outline btn-floating m-1'
                            href={SOCIAL_MEDIA.github}
                            role='button'
                            target='blank'
                        >
                            <i className='fab fa-github'></i>
                        </a>
                    </section>
                    {/* <!-- Section: Social media --> */}

                    {/* <!-- Section: Form --> */}
                    <section className=''>
                        <form action=''>
                            {/* <!--Grid row--> */}
                            <div className='row d-flex justify-content-center'>
                                {/* <!--Grid column--> */}
                                <div className='col-auto'>
                                    <p className='pt-2'>
                                        <strong>Sign up for our newsletter</strong>
                                    </p>
                                </div>
                                {/* <!--Grid column--> */}

                                {/* <!--Grid column--> */}
                                <div className='col-md-5 col-12'>
                                    {/* <!-- Email input --> */}
                                    <div data-mdb-input-init className='form-outline mb-4'>
                                        <input type='email' id='form5Example24' className='form-control' />
                                        <label className='form-label' htmlFor='form5Example24'>
                                            Email address
                                        </label>
                                    </div>
                                </div>
                                {/* <!--Grid column--> */}

                                {/* <!--Grid column--> */}
                                <div className='col-auto'>
                                    {/* <!-- Submit button --> */}
                                    <button data-mdb-ripple-init type='submit' className='btn btn-outline mb-4'>
                                        Subscribe
                                    </button>
                                </div>
                                {/* <!--Grid column--> */}
                            </div>
                            {/* <!--Grid row--> */}
                        </form>
                    </section>
                    {/* <!-- Section: Form --> */}

                    {/* <!-- Section: Text --> */}
                    <section className='mb-4'>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum repellat
                            quaerat voluptatibus placeat nam, commodi optio pariatur est quia magnam eum harum corrupti
                            dicta, aliquam sequi voluptate quas.
                        </p>
                    </section>
                    {/* <!-- Section: Text --> */}

                    {/* <!-- Section: Links --> */}
                    <section className=''>
                        {/* <!--Grid row--> */}
                        <div className='row'>
                            {/* <!--Grid column--> */}
                            <div className='col-lg-3 col-md-6 mb-4 mb-md-0'>
                                <h5 className='text-uppercase'>Links</h5>

                                <ul className='list-unstyled mb-0'>
                                    <li>
                                        <a className='text-body' href='#!'>
                                            Link 1
                                        </a>
                                    </li>
                                    <li>
                                        <a className='text-body' href='#!'>
                                            Link 2
                                        </a>
                                    </li>
                                    <li>
                                        <a className='text-body' href='#!'>
                                            Link 3
                                        </a>
                                    </li>
                                    <li>
                                        <a className='text-body' href='#!'>
                                            Link 4
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            {/* <!--Grid column--> */}

                            {/* <!--Grid column--> */}
                            <div className='col-lg-3 col-md-6 mb-4 mb-md-0'>
                                <h5 className='text-uppercase'>Links</h5>

                                <ul className='list-unstyled mb-0'>
                                    <li>
                                        <a className='text-body' href='#!'>
                                            Link 1
                                        </a>
                                    </li>
                                    <li>
                                        <a className='text-body' href='#!'>
                                            Link 2
                                        </a>
                                    </li>
                                    <li>
                                        <a className='text-body' href='#!'>
                                            Link 3
                                        </a>
                                    </li>
                                    <li>
                                        <a className='text-body' href='#!'>
                                            Link 4
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            {/* <!--Grid column--> */}

                            {/* <!--Grid column--> */}
                            <div className='col-lg-3 col-md-6 mb-4 mb-md-0'>
                                <h5 className='text-uppercase'>Links</h5>

                                <ul className='list-unstyled mb-0'>
                                    <li>
                                        <a className='text-body' href='#!'>
                                            Link 1
                                        </a>
                                    </li>
                                    <li>
                                        <a className='text-body' href='#!'>
                                            Link 2
                                        </a>
                                    </li>
                                    <li>
                                        <a className='text-body' href='#!'>
                                            Link 3
                                        </a>
                                    </li>
                                    <li>
                                        <a className='text-body' href='#!'>
                                            Link 4
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            {/* <!--Grid column--> */}

                            {/* <!--Grid column--> */}
                            <div className='col-lg-3 col-md-6 mb-4 mb-md-0'>
                                <h5 className='text-uppercase'>Links</h5>

                                <ul className='list-unstyled mb-0'>
                                    <li>
                                        <a className='text-body' href='#!'>
                                            Link 1
                                        </a>
                                    </li>
                                    <li>
                                        <a className='text-body' href='#!'>
                                            Link 2
                                        </a>
                                    </li>
                                    <li>
                                        <a className='text-body' href='#!'>
                                            Link 3
                                        </a>
                                    </li>
                                    <li>
                                        <a className='text-body' href='#!'>
                                            Link 4
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            {/* <!--Grid column--> */}
                        </div>
                        {/* <!--Grid row--> */}
                    </section>
                    {/* <!-- Section: Links --> */}
                </div>
                {/* <!-- Grid container --> */}

                {/* <!-- Copyright --> */}
                <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                    © 2024 Copyright:&nbsp;
                    <a className='text-reset fw-bold' href='https://github.com/eduardohurtado/' target='blank'>
                        Github
                    </a>
                </div>
                {/* <!-- Copyright --> */}
            </footer>
        </>
    );
};

export default Footer;
