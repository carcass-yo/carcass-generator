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
   * @return {string} Returns git origin url
   */
  static getGitOrigin(defaultValue = '') {
    if (!shell.which('git')) return defaultValue;
    const res = shell
      .exec('git remote get-url origin', { silent: true })
      .stdout
      .trim();
    return res.includes('Not a git repository') ? defaultValue : res;
  }

  /**
   * Check is value null
   * @param {*} val
   * @return {boolean} Returns true if val is null
   */
  static isNull(val) {
    return val === null;
  }

  /**
   * Check is value undefined
   * @param {*} val
   * @return {boolean} Returns true if val is undefined
   */
  static isUndefined(val) {
    return val === undefined;
  }

  /**
   * Create slug string
   * @param {String} str
   * @return {String}
   */
  static slugify(str) {
    return str.toLowerCase().replace(/\s+/g, '-');
  }
};
