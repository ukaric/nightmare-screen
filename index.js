const Nightmare = require('nightmare')
require('./devices')
// Link to test

const testLink = 'http://www.pinupfiles.com/test/prejoin/prejoin.php'

const nightmare = new Nightmare({
  show: true,
  frame: false
})

const extensionHeight = 500
const printLong = true

const nexus7 = {
  portrait: {
    width: 600,
    height: 960,
    filename: './screens/tablets/nexus7-portrait.png'
  },
  landscape: {
    width: 960,
    height: 600,
    filename: './screens/tablets/nexus7-landscape.png'
  }
}

const ipad = {
  portrait: {
    width: 768,
    height: 1024,
    filename: './screens/tablets/ipad-portrait.png'
  },
  landscape: {
    width: 1024,
    height: 768,
    filename: './screens/tablets/ipad-landscape.png'
  }
}

const ipad_pro = {
  portrait: {
    width: 1024,
    height: 1366,
    filename: './screens/tablets/ipad-portrait.png'
  },
  landscape: {
    width: 1366,
    height: 1024,
    filename: './screens/tablets/ipad-landscape.png'
  }
}

const iphone4 = {
  portrait: {
    width: 320,
    height: 480,
    filename: './screens/mobile/iphone4-portrait.png'
  },
  landscape: {
    width: 480,
    height: 320,
    filename: './screens/mobile/iphone4-landscape.png'
  }
}

const iphone5 = {
  portrait: {
    width: 320,
    height: 568,
    filename: './screens/mobile/iphone5-portrait.png'
  },
  landscape: {
    width: 568,
    height: 320,
    filename: './screens/mobile/iphone5-landscape.png'
  }
}

const iphone6 = {
  portrait: {
    width: 375,
    height: 667,
    filename: './screens/mobile/iphone6-portrait.png'
  },
  landscape: {
    width: 667,
    height: 375,
    filename: './screens/mobile/iphone6-landscape.png'
  }
}

const iphone6_plus = {
  portrait: {
    width: 414,
    height: 736,
    filename: './screens/mobile/iphone6_plus-portrait.png'
  },
  landscape: {
    width: 736,
    height: 414,
    filename: './screens/mobile/iphone6_plus-landscape.png'
  }
}

const nexus6p = {
  portrait: {
    width: 412,
    height: 732,
    filename: './screens/mobile/nexus6p-portrait.png'
  },
  landscape: {
    width: 732,
    height: 412,
    filename: './screens/mobile/nexus6p-landscape.png'
  }
}

const laptopHDPI = {
  width: 1440,
  height: 900,
  filename: './screens/laptop-HDPI.png'
}

const laptopMDPI = {
  width: 1280,
  height: 800,
  filename: './screens/laptop-MDPI.png'
}

if (printLong) {
  nightmare
    .goto(testLink)
    //Laptop MDPI
    .viewport(laptopMDPI.width, laptopMDPI.height + extensionHeight)
    .wait(1000)
    .screenshot(laptopMDPI.filename)
    //Laptop HDPI
    .viewport(laptopHDPI.width, laptopHDPI.height + extensionHeight)
    .wait(1000)
    .screenshot(laptopHDPI.filename)
    //Nexus 7
    .viewport(nexus7.portrait.width, nexus7.portrait.height + extensionHeight)
    .wait(1000)
    .screenshot(nexus7.portrait.filename)
    .viewport(nexus7.landscape.width, nexus7.landscape.height + extensionHeight)
    .wait(1000)
    .screenshot(nexus7.landscape.filename)
    //Ipad
    .viewport(ipad.portrait.width, ipad.portrait.height + extensionHeight)
    .wait(1000)
    .screenshot(ipad.portrait.filename)
    .viewport(ipad.landscape.width, ipad.landscape.height + extensionHeight)
    .wait(1000)
    .screenshot(ipad.landscape.filename)
    //Ipad Pro
    .viewport(ipad_pro.portrait.width, ipad_pro.portrait.height + extensionHeight)
    .wait(1000)
    .screenshot(ipad_pro.portrait.filename)
    .viewport(ipad_pro.landscape.width, ipad_pro.landscape.height + extensionHeight)
    .wait(1000)
    .screenshot(ipad_pro.landscape.filename)
    //Iphone 4
    .viewport(iphone4.portrait.width, iphone4.portrait.height + extensionHeight)
    .wait(1000)
    .screenshot(iphone4.portrait.filename)
    .viewport(iphone4.landscape.width, iphone4.landscape.height + extensionHeight)
    .wait(1000)
    .screenshot(iphone4.landscape.filename)
    //Iphone 5
    .viewport(iphone5.portrait.width, iphone5.portrait.height + extensionHeight)
    .wait(1000)
    .screenshot(iphone5.portrait.filename)
    .viewport(iphone5.landscape.width, iphone5.landscape.height + extensionHeight)
    .wait(1000)
    .screenshot(iphone5.landscape.filename)
    //Iphone 6
    .viewport(iphone6.portrait.width, iphone6.portrait.height + extensionHeight)
    .wait(1000)
    .screenshot(iphone6.portrait.filename)
    .viewport(iphone6.landscape.width, iphone6.landscape.height + extensionHeight)
    .wait(1000)
    .screenshot(iphone6.landscape.filename)
    //Iphone 6+
    .viewport(iphone6_plus.portrait.width, iphone6_plus.portrait.height + extensionHeight)
    .wait(1000)
    .screenshot(iphone6_plus.portrait.filename)
    .viewport(
      iphone6_plus.landscape.width,
      iphone6_plus.landscape.height + extensionHeight
    )
    .wait(1000)
    .screenshot(iphone6_plus.landscape.filename)
    //Nexus 6P
    .viewport(nexus6p.portrait.width, nexus6p.portrait.height + extensionHeight)
    .wait(1000)
    .screenshot(nexus6p.portrait.filename)
    .viewport(nexus6p.landscape.width, nexus6p.landscape.height + extensionHeight)
    .wait(1000)
    .screenshot(nexus6p.landscape.filename)
    .end(() => console.log('done'))
} else {
  nightmare
    .goto(testLink)
    //Laptop MDPI
    .viewport(laptopMDPI.width, laptopMDPI.height)
    .wait(1000)
    .screenshot(laptopMDPI.filename)
    //Laptop HDPI
    .viewport(laptopHDPI.width, laptopHDPI.height)
    .wait(1000)
    .screenshot(laptopHDPI.filename)
    //Nexus 7
    .viewport(nexus7.portrait.width, nexus7.portrait.height)
    .wait(1000)
    .screenshot(nexus7.portrait.filename)
    .viewport(nexus7.landscape.width, nexus7.landscape.height)
    .wait(1000)
    .screenshot(nexus7.landscape.filename)
    //Ipad
    .viewport(ipad.portrait.width, ipad.portrait.height)
    .wait(1000)
    .screenshot(ipad.portrait.filename)
    .viewport(ipad.landscape.width, ipad.landscape.height)
    .wait(1000)
    .screenshot(ipad.landscape.filename)
    //Ipad Pro
    .viewport(ipad_pro.portrait.width, ipad_pro.portrait.height)
    .wait(1000)
    .screenshot(ipad_pro.portrait.filename)
    .viewport(ipad_pro.landscape.width, ipad_pro.landscape.height)
    .wait(1000)
    .screenshot(ipad_pro.landscape.filename)
    //Iphone 4
    .viewport(iphone4.portrait.width, iphone4.portrait.height)
    .wait(1000)
    .screenshot(iphone4.portrait.filename)
    .viewport(iphone4.landscape.width, iphone4.landscape.height)
    .wait(1000)
    .screenshot(iphone4.landscape.filename)
    //Iphone 5
    .viewport(iphone5.portrait.width, iphone5.portrait.height)
    .wait(1000)
    .screenshot(iphone5.portrait.filename)
    .viewport(iphone5.landscape.width, iphone5.landscape.height)
    .wait(1000)
    .screenshot(iphone5.landscape.filename)
    //Iphone 6
    .viewport(iphone6.portrait.width, iphone6.portrait.height)
    .wait(1000)
    .screenshot(iphone6.portrait.filename)
    .viewport(iphone6.landscape.width, iphone6.landscape.height)
    .wait(1000)
    .screenshot(iphone6.landscape.filename)
    //Iphone 6+
    .viewport(iphone6_plus.portrait.width, iphone6_plus.portrait.height)
    .wait(1000)
    .screenshot(iphone6_plus.portrait.filename)
    .viewport(iphone6_plus.landscape.width, iphone6_plus.landscape.height)
    .wait(1000)
    .screenshot(iphone6_plus.landscape.filename)
    //Nexus 6P
    .viewport(nexus6p.portrait.width, nexus6p.portrait.height)
    .wait(1000)
    .screenshot(nexus6p.portrait.filename)
    .viewport(nexus6p.landscape.width, nexus6p.landscape.height)
    .wait(1000)
    .screenshot(nexus6p.landscape.filename)
    .end(() => console.log('done'))
}
