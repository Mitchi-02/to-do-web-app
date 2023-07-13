import { Label, Priority, Status } from '@/types'
import { Schema, models, model, Model, ObjectId } from 'mongoose'

export interface ITask {
  _id: ObjectId
  title: string
  description: string
  deadline: Date
  status: Status
  priority: Priority
  labels: Label[]
  user_id?: ObjectId
}

interface TaskModel extends Model<ITask> {}

const TaskSchema = new Schema<ITask, TaskModel>(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    deadline: {
      type: Date,
      required: true,
    },
    status: {
        type: String,
        default: "to do"
    },
    priority: {
        type: String,
        required: true
    },
    labels: {
        type: [String],
        required: true,
        min: 1
    },
    user_id: {
        required: true,
        type: Schema.Types.ObjectId,
        ref: "User"
    }
  },
  { timestamps: true }
)


const Task: TaskModel =
  models.Task || model<ITask, TaskModel>('Task', TaskSchema)

export default Task
