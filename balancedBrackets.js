    //{[()]}
    function isBalanced(s) { 

      let stack = []
      for(let i = 0; i < s.length; i++){
          if(s[i] == '{' || s[i] == '(' || s[i] == '['){
              stack.push(s[i])
          } 
          else if(s[i] == '}'){ 
              if(stack.length == 0 || stack[stack.length -1] != '{'){
                  return 'NO'
              }
              stack.pop()            
          }else if(s[i] == ')'){ 
              if(stack.length == 0 || stack[stack.length -1] != '('){
                  return 'NO'
              }
              stack.pop()
          }else if(s[i] == ']'){ 
              if(stack.length == 0 || stack[stack.length -1] != '['){
                  return 'NO'
              }
              stack.pop()
          }
      }
      return !stack.length ? 'YES' : 'NO'
    }
    
    isBalanced('{[()]}')
