const YoGenerator = require('yeoman-generator');
const shell = require('shelljs');

module.exports = class extends YoGenerator {
  /**
   * Convert prompts array to options
   * @param {Array<*>} prompts
   */
  convertPromptsToOptions(prompts) {
    prompts.forEach((prompt) => {
      this.option(prompt.name, {
        type: prompt.type === 'confirm' ? Boolean : String,
        description: prompt.message,
      });
    });
  }

  /**
   * Get git repository origin url
   * @param {string} [defaultValue] set default returned value
   * @return {string}
   */
  static getGitOrigin(defaultValue = '') {
    if (!shell.which('git')) return defaultValue;
    const res = shell
      .exec('git remote get-url origin', { silent: true })
      .stdout
      .trim();
    return res.includes('Not a git repository') ? defaultValue : res;
  }
};
