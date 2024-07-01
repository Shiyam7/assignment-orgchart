import { Employee, EmployeeNode } from "."



 export const buildEmployeeTree = (employees: Employee[]) => {
    const employeeMap: {
        [key: string]: any
    } = {} 
    const tree : EmployeeNode[] = [];

    for(let emp of employees) {
        employeeMap[String(emp.id)] = {...emp, subordinates: []}
    }

    employees.forEach(emp => {
        if(emp.manager === '') tree.push(employeeMap[String(emp.id)])
        else {
            const manager = employeeMap[String(emp.manager)];
            if (manager) {
                manager.subordinates.push(employeeMap[String(emp.id)]);
            }
        }
    })
    
    return tree;
 }

 export const findTreeWidth = (tree: EmployeeNode[]): number => {
    if (tree.length === 0) return 0;

    let maxWidth = 0;
    const queue: EmployeeNode[] = [...tree];

    while (queue.length > 0) {
        const levelSize = queue.length;
        maxWidth = Math.max(maxWidth, levelSize);

        for (let i = 0; i < levelSize; i++) {
            const currentNode = queue.shift()!;
            queue.push(...currentNode.subordinates);
        }
    }

    return maxWidth;
};

export const findTreeHeight = (tree: EmployeeNode[]): number => {
    const getHeight = (node: EmployeeNode): number => {
        if (node.subordinates.length === 0) return 1;
        const heights = node.subordinates.map(sub => getHeight(sub));
        return Math.max(...heights) + 1;
    };

    if (tree.length === 0) return 0;
    return Math.max(...tree.map(rootNode => getHeight(rootNode)));
};

export const findEmployee = (node: EmployeeNode, id: number): EmployeeNode | null => {
    if (Number(node.id) === id) {
        return node;
    }

    for (let sub of node.subordinates) {
        const found = findEmployee(sub, id);
        if (found) {
            return found;
        }
    }

    return null;
};
