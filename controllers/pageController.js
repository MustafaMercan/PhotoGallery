const getIndexPage = (req,res) => {
    res.render("index.ejs",{
        link:'index'
    });
}

const getAboutPage = (req,res) => {
    res.render("about.ejs",{
        link:'about'
    });
}

const getRegisterPage = (req,res) => {
    res.render("register.ejs",{
        link:"register"
    })
}

const getLoginPage = (req,res) => {
    res.render("login.ejs",{
        link:"register"
    })
}



export {getIndexPage, getAboutPage, getRegisterPage, getLoginPage};