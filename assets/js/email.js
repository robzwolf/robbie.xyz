/**
 * This file exists in an attempt to obfuscate the email
 * address for the website. The email is stored in this
 * file and encoded as base64.
 */
const Email = (() => {
    // Email address encoded as base64
    const encodedEmail = 'bWFpbEByandoaXR3b3J0aC5jby51aw==';

    // DOM element into which the email address will be inserted
    let emailMountPoint;

    const insertEmail = (() => {
        const anchor = document.createElement('a');
        const email = atob(encodedEmail);
        anchor.setAttribute('href', email);
        anchor.textContent = email;
        emailMountPoint.innerHTML = '';
        emailMountPoint.appendChild(anchor);
    });

    const init = (() => {
        // Bindings
        emailMountPoint = document.querySelector('.email-address');

        // Method calls
        insertEmail();
    });

    return {
        init
    }
});

export default Email;
