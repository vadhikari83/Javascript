console.log(`
    Why we need to define the variables and way of doing it.
        1. with use of var
        2. with use of let
        3. with use of const
    
    When we declare any variable, a memory location is assigned to it 
    where it actuall hold the value assigned to it. And when we call 
    that variable, it goes to that location and fetch the value for us
    to use that in program.
    `)

    const accountID = 1234;   //cameCase + easy to understand and should be meaningful.
    let accountEmail = "vadhikari@tempo.com";
    var accountPassword = "12345@";
    accountCity = "Jaipur";
    let accountState;

    // accountID = 12345;    double forward slash is used to comment a single line.
    // console.log(accountID); when written, interprete or compiler does not not read this line of code.

    accountEmail = "vadhikari@ddd.bank.com";
    accountPassword = "43445543@";
    accountCity = "Bengaluru";
    console.table([accountID, accountEmail, accountPassword, accountCity,accountState]);

   /* Notes
    1.  We should not use var. Because of its limitation in block scope or in functional scope.
    instead use var or const.
    2.  
   */
