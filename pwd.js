//output a prompt

const pwd = () => {
     process.stdout.write(__dirname);
     process.stdout.write('\nprompt >' );
};
module.exports = pwd;
