function isValidStep(step) {
    return (
        typeof step.id === 'string' &&
        typeof step.title === 'string' &&
        typeof step.content === 'string'
    );
}

function pushStep(step) {
    if (isValidStep(step)) {
        return {
            id: step.id,
            title: step.title,
            content: step.content,
        };
    }

    console.warn('Некорректные данные шага:', step);
    return {
        id: 'unknown',
        title: 'Без названия',
        content: 'Нет содержимого',
    };
}

export function initializeSteps(data) {
    return data.map(pushStep);
}