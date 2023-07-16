import { ITask } from '@/types'
import { Schema, models, model, Model } from 'mongoose'



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
      type: String,
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
