export interface TaskDetailsDTO {
    href: string;
    id: string;
    name: string;
    status: string;
    project: string;
    use_interruptible_instances: boolean;
    execution_settings: any;
    app: string;
    type: string;
    batch: boolean;
    created_by: string;
    executed_by: string;
    start_time: Date;
    end_time: Date;
    execution_status: any;
    price: any;
    inputs: any;
    outputs: any;
    parent: string;
    batch_group: any;
    errors: Array<any>;
}

export class TaskDetails {
    public static fromData(data: TaskDetailsDTO): TaskDetails {
        return new TaskDetails(
            data.id,
            data.name || 'no name',
            data.status || '',
            data.project || 'no project name'
        );
    }

    public constructor(
        public id: string,
        public name: string,
        public status: string,
        public project: string
    ) {}
}
