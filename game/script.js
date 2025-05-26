function assignGroups() {
    const input = document.getElementById('nameInput').value.trim();
    let names = input.split('\n').map(name => name.trim()).filter(Boolean);
  
    // 이름을 랜덤하게 섞기
    names = names.sort(() => Math.random() - 0.5);
  
    // 반으로 나눔
    const midpoint = Math.ceil(names.length / 2);
    const groupA = names.slice(0, midpoint);
    const groupB = names.slice(midpoint);
  
    // 출력
    const groupAList = document.getElementById('groupAList');
    const groupBList = document.getElementById('groupBList');
  
    groupAList.innerHTML = '';
    groupBList.innerHTML = '';
  
    groupA.forEach((name, index) => {
      const li = document.createElement('li');
      li.textContent = `${index + 1}. ${name}`;
      groupAList.appendChild(li);
    });
  
    groupB.forEach((name, index) => {
      const li = document.createElement('li');
      li.textContent = `${index + 1}. ${name}`;
      groupBList.appendChild(li);
    });
  }  