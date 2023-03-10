import type { NextApiRequest, NextApiResponse } from "next";

export type Time = {
    time: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Time>) {
    const date = new Date();

    res.status(200).json({ time: getTime(date) });
}

function getTime(date: Date) {
    return `Текущее время с погрешностью в 30 секунд: ${date.getHours()} часов, ${date.getMinutes()} минут, ${date.getSeconds()} секунд`;
}
