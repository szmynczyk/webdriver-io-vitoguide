const { config } = require("../../wdio.conf");

describe('Vitoguide login page', () => {
    it('Maintainer should land on installations page after proper login', async () => {
        await browser.url(config.baseUrl)
        await browser.pause(2000)

        const loginButton = await $('#gtm_user-btn')   
        await loginButton.click()

        const userName = await $('#isiwebuserid')
        await userName.setValue('vitoguidetest@viessmann.com')
        const password = await $('#isiwebpasswd')
        await password.setValue('Test1234!')

        const login = await $('#loginButton')
        await login.click()

        await expect(browser).toHaveUrlContaining('/installations')
    });
    it('Supporter should land on installations page after proper login', async () => {
        await browser.url(config.baseUrl)
        await browser.pause(5000)

        const loginButton = await $('#gtm_user-btn')
        await loginButton.click()

        const userName = await $('#isiwebuserid')
        await userName.setValue('rsa_intsupport')
        const password = await $('#isiwebpasswd')
        await password.setValue('Test12345!')

        const login = await $('#loginButton')
        await login.click()

        await expect(browser).toHaveUrlContaining('/search')
    })
})
